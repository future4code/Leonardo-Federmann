import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { goToLogin, goBack, goToPostPage } from '../coordinator/Coordinator'
import { useForm } from '../custom hooks and functions/useForm'
import logout from '../custom hooks and functions/logout'
import { FeedAndPostContainer, PostsContainer, CreatePostForm, SearchForm, StyledTextField, FeedFormsContainer } from '../style/style'

import Header from '../components/Header'
import Post from '../components/Post'
import Loading from '../components/Loading'
import {useLanguages} from '../custom hooks and functions/useLanguages'
import LanguagesMenu from '../components/LanguagesMenu'
import {languages} from '../languages/languages'
import {LanguageContext} from '../globalContext/LanguageContext'
import likeIconFilled from '../images/favorite.svg'
import likeIcon from '../images/favorite-white.svg'

export default function FeedPage() {
    const history = useHistory()
    const token = window.localStorage.getItem('token')
    const [posts, setPosts] = useState([])
    const [renderedPosts, setRenderedPosts] = useState([])
    const [form, setForm, handleValues, resetForm] = useForm({ title: '', text: '', search: '' })
    const [language, setLanguage, menu, setMenu, changeLanguage] = useContext(LanguageContext)

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

    useEffect(() => {
        searchPost()
    }, [form.search])

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
            alert(languages[language].errorMessage)
        }
    }

    const createPost = async (e) => {
        e.preventDefault()
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

    const searchPost = () => {
        console.log(form.search)
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
            <LanguagesMenu />
            <Header>
                <p onClick={() => goBack(history)}>{languages[language].goBack}</p>
                <p onClick={() => setMenu(true)}>{languages[language].changeLanguage}</p>
                <p onClick={() => logout(history)}>{languages[language].logout}</p>
            </Header>
            {!posts[0] ?
                <Loading /> :
                <>
                    <FeedFormsContainer>
                        <CreatePostForm onSubmit={createPost}>
                            <h3>{languages[language].createYourPost}</h3>
                            <StyledTextField
                                label={languages[language].title}
                                value={form.title}
                                name="title"
                                onChange={handleValues}
                                type="text"
                                required
                                inputProps={{ pattern: '^.{1,100}$', title: languages[language].titlePattern }}
                            />
                            <StyledTextField
                                label={languages[language].postText}
                                value={form.text}
                                name="text"
                                onChange={handleValues}
                                type="text"
                                required
                            />
                            <Button type="submit" color="primary" variant="contained">{languages[language].createPost}</Button>
                        </CreatePostForm>
                        <SearchForm>
                            <h3>{languages[language].searchAPost}</h3>
                            <StyledTextField
                                label={languages[language].search}
                                value={form.search}
                                name="search"
                                onChange={handleValues}
                                type="text"
                            />
                        </SearchForm>
                    </FeedFormsContainer>
                    <PostsContainer>
                        { !renderedPosts[0] ? 
                        <h3>{languages[language].searchCorrespondence}</h3> :
                        <>
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
                        </>}
                    </PostsContainer>
                </>
            }
        </FeedAndPostContainer>
    )
}
