import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { FeedAndPostContainer, CommentsContainer, CreateCommentField, CreateCommentForm, LoginAndRegisterForm } from '../style/style'
import { useForm } from '../custom hooks and functions/useForm'
import Header from '../components/Header'
import Post from '../components/Post'
import Loading from '../components/Loading'
import Comment from '../components/Comment'
import Button from '@material-ui/core/Button'
import { goBack } from '../coordinator/Coordinator'
import likeIconFilled from '../images/favorite.svg'
import likeIcon from '../images/favorite-white.svg'
import logout from '../custom hooks and functions/logout'
import {useLanguages} from '../custom hooks and functions/useLanguages'
import LanguagesMenu from '../components/LanguagesMenu'
import {languages} from '../languages/languages'
import {LanguageContext} from '../globalContext/LanguageContext'

export default function PostPage() {
    const history = useHistory()
    const pathParams = useParams()
    const token = window.localStorage.getItem('token')
    const [post, setPost] = useState({})
    const [seeComments, setSeeComments] = useState(false)
    const [form, setForm, handleValues, resetForm] = useForm({ text: '' })
    const [language, setLanguage, menu, setMenu, changeLanguage] = useContext(LanguageContext)

    useEffect(() => {
        getPostDetails(pathParams.postId)
    }, [pathParams.postId])

    const getPostDetails = async (id) => {
        try {
            const postDetails = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`, {
                headers: {
                    Authorization: token
                }
            })
            setPost(postDetails.data.post)
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
            let newPostInfo = { ...post }
            newPostInfo.userVoteDirection = correctedDirection
            if (correctedDirection > 0 || currentDirection === -1) {
                currentDirection - direction === 2 || currentDirection - direction === -2 ?
                    newPostInfo.votesCount += 2 :
                    newPostInfo.votesCount += 1
            } else {
                currentDirection - direction === 2 || currentDirection - direction === -2 ?
                    newPostInfo.votesCount -= 2 :
                    newPostInfo.votesCount -= 1
            }

            setPost(newPostInfo)
        } catch (error) {
            console.log(error)
            alert(languages[language].errorMessage)
        }
    }

    const voteComment = async (id, currentDirection, direction) => {
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
            await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.postId}/comment/${id}/vote`, body, {
                headers: {
                    Authorization: token,
                }
            })
            let newCommentsInfo = [...post.comments]
            newCommentsInfo.forEach((post) => {
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
            setPost({ ...post, comments: newCommentsInfo })
        } catch (error) {
            alert(languages[language].errorMessage)
        }
    }

    const createComment = async (e) => {
        e.preventDefault()
        try {
            const newComment = {
                text: form.text
            }
            await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.postId}/comment`, newComment, {
                headers: {
                    Authorization: token
                }
            })
            getPostDetails(pathParams.postId)
            resetForm()
        } catch (error) {
            alert(languages[language].errorMessage)
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
            { !post.title ?
                <Loading /> :
                <>
                    <Post
                        title={post.title}
                        userName={post.username}
                        text={post.text}
                        positiveVote={() => vote(post.id, post.userVoteDirection, 1)}
                        negativeVote={() => vote(post.id, post.userVoteDirection, -1)}
                        numberOfPositiveVotes={post.votesCount}
                        likeIcon={post.userVoteDirection === 1 ? likeIconFilled : likeIcon}
                        deslikeColor={post.userVoteDirection === -1 ? 'black' : 'white'}
                        numberOfComments={post.commentsCount}
                        checkDetails={() => setSeeComments(!seeComments)}
                    />
                    <CommentsContainer>
                        {seeComments ?
                            <>
                                <CreateCommentForm onSubmit={createComment}>
                                    <CreateCommentField
                                        label={languages[language].commentFieldLabel}
                                        value={form.text}
                                        name="text"
                                        onChange={handleValues}
                                        type="text"
                                        required
                                    />
                                    <Button type="submit" size="small" color="primary" variant="contained">{languages[language].commentButton}</Button>
                                </CreateCommentForm>
                                {post.comments.map((comment) => {
                                    return <Comment
                                        userName={comment.username}
                                        text={comment.text}
                                        positiveVote={() => voteComment(comment.id, comment.userVoteDirection, 1)}
                                        negativeVote={() => voteComment(comment.id, comment.userVoteDirection, -1)}
                                        numberOfVotes={comment.votesCount}
                                        likeIcon={comment.userVoteDirection === 1 ? likeIconFilled : likeIcon}
                                        deslikeColor={comment.userVoteDirection === -1 ? 'black' : 'white'}
                                    />
                                })}
                            </>
                            :
                            <div></div>
                        }
                    </CommentsContainer>
                </>
            }
        </FeedAndPostContainer>
    )
}