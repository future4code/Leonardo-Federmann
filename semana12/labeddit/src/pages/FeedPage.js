import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { goToLogin, goBack, goToPostPage } from '../coordinator/Coordinator'
import { useForm } from '../custom hooks and functions/useForm'
import logout from '../custom hooks and functions/logout'
import { FeedAndPostContainer, PostsContainer, CreatePostForm, SearchForm, StyledTextField, FeedFormsContainer } from '../style/style'
import Header from '../components/Header'
import Post from '../components/Post'
import likeIconFilled from '../images/favorite.svg'
import likeIcon from '../images/favorite-white.svg'

export default function FeedPage() {
    const history = useHistory()
    const token = window.localStorage.getItem('token')
    const [posts, setPosts] = useState([])
    const [renderedPosts, setRenderedPosts] = useState([])
    const [form, setForm, handleValues, resetForm] = useForm({ title: '', text: '', search: '' })

    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            goToLogin(history)
        }
    }, [history])

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        setRenderedPosts(posts)
    }, [posts])

    const getPosts = async () => {
        try {
            const listOfPosts = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts`, {
                headers: {
                    Authorization: token,
                }
            })
            setPosts(listOfPosts.data.posts)
        } catch (error) {
            console.log(error.response)
        }
    }

    const vote = async (id, currentDirection, direction) => {
        let correctedDirection
        if (currentDirection === direction) {
            correctedDirection = 0
        } else {
            correctedDirection = direction
        }
        const body = {
            direction: correctedDirection
        }
        try {
            await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`, body, {
                headers: {
                    Authorization: token,
                }
            })
            let newPostsInfo = [...posts]
            newPostsInfo.forEach((post) => {
                if (post.id === id) {
                    post.userVoteDirection = correctedDirection
                    if (correctedDirection > 0 || currentDirection === -1) {
                        currentDirection - direction === 2 || currentDirection - direction === -2 ?
                            post.votesCount += 2 :
                            post.votesCount += 1
                    } else {
                        currentDirection - direction === 2 || currentDirection - direction === -2 ?
                            post.votesCount -= 2 :
                            post.votesCount -= 1
                    }
                }
            })
            setPosts(newPostsInfo)
        } catch (error) {
            alert('Ocorreu um erro no sistema e estamos trabalhando para corrigi-lo. Por favor, tente novamente mais tarde.')
        }
    }

    const createPost = async (e) => {
        console.log('entrou na função')
        const newPost = {
            text: form.text,
            title: form.title
        }
        try {
            await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts`, newPost, {
                headers: {
                    Authorization: token
                }
            })
            getPosts()
            resetForm()
        } catch (error) {
            console.log(error.response)
        }
    }

    const doubleOnChange = (e) => {
        handleValues(e)
        searchPost()
    }

    const searchPost = () => {
        console.log(renderedPosts)
            if (form.search) {
                let newPostsList = posts.filter((post) => {
                    return (post.title.toLowerCase().includes(form.search.toLowerCase()) || post.username.toLowerCase().includes(form.search.toLowerCase()) || post.text.toLowerCase().includes(form.search.toLowerCase()))
                })
                setRenderedPosts(newPostsList)
            } else {
                setRenderedPosts(posts)
            }
    }

    return (
        <FeedAndPostContainer>
            <Header>
                <p onClick={() => goBack(history)}>Voltar</p>
                <p onClick={() => logout(history)}>Log Out</p>
            </Header>
            <FeedFormsContainer>
                <CreatePostForm>
                    <h3>Crie seu post!</h3>
                    <StyledTextField
                        label="Título"
                        value={form.title}
                        name="title"
                        onChange={handleValues}
                    />
                    <StyledTextField
                        label="Texto do post"
                        value={form.text}
                        name="text"
                        onChange={handleValues}
                    />
                    <Button onClick={createPost} color="primary" variant="contained">Criar post</Button>
                </CreatePostForm>
                <SearchForm>
                    <h3>Busque um post</h3>
                    <StyledTextField
                        label="Buscar..."
                        value={form.search}
                        name="search"
                        onChange={doubleOnChange}
                    />
                </SearchForm>
            </FeedFormsContainer>
            <PostsContainer>
                {renderedPosts.map((post) => {
                    return <Post
                        title={post.title}
                        userName={post.username}
                        text={post.text}
                        positiveVote={() => vote(post.id, post.userVoteDirection, 1)}
                        negativeVote={() => vote(post.id, post.userVoteDirection, -1)}
                        numberOfPositiveVotes={post.votesCount}
                        likeIcon={post.userVoteDirection === 1 ? likeIconFilled : likeIcon}
                        deslikeColor={post.userVoteDirection === -1 ? 'black' : 'white'}
                        numberOfComments={post.commentsCount}
                        checkDetails={() => goToPostPage(history, post.id)}
                    />
                })}
            </PostsContainer>
        </FeedAndPostContainer>
    )
}
