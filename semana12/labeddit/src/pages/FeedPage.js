import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { goToLogin, goBack, goToPostPage } from '../coordinator/Coordinator'
import logout from '../custom hooks and functions/logout'
import { FeedAndPostContainer, PostsContainer } from '../style/style'
import Header from '../components/Header'
import Post from '../components/Post'
import likeIconFilled from '../images/favorite.svg'
import likeIcon from '../images/favorite-white.svg'

export default function FeedPage() {
    const history = useHistory()
    const token = window.localStorage.getItem('token')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            goToLogin(history)
        }
    }, [history])

    useEffect(()=>{
        getPosts()
    },[])

    // const logout = () => {
    //     window.localStorage.removeItem('token')
    //     goToLogin(history)
    // }

    const getPosts = async() =>{
        try{
            const listOfPosts = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts`, {
                headers:{
                    Authorization: token,
                }
            })
            setPosts(listOfPosts.data.posts)
        }catch(error){
            console.log(error.response)
        }
    }

    const vote = async(id, currentDirection, direction) =>{
        let correctedDirection
        if(currentDirection===direction){
            correctedDirection=0
        } else{
            correctedDirection=direction
        }
        const body = {
            direction: correctedDirection
        }
        try{
            await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`, body, {
                headers:{
                    Authorization: token,
                }
            })
            let newPostsInfo = [...posts]
            newPostsInfo.forEach((post)=>{
                if(post.id===id){
                    post.userVoteDirection=correctedDirection
                    if(correctedDirection>0 || currentDirection === -1){
                        currentDirection - direction===2 || currentDirection - direction=== -2 ? 
                        post.votesCount += 2 :
                        post.votesCount += 1
                    // }else if(correctedDirection<0 || currentDirection ===1){
                    }else {
                        currentDirection - direction===2 || currentDirection - direction=== -2 ? 
                        post.votesCount -= 2 :
                        post.votesCount -= 1
                    }
                    // }else{
                    //     currentDirection ===1 ? post.votesCount -= 1 : post.votesCount += 1
                    // }     
                }
            })
            setPosts(newPostsInfo)
        }catch(error){
            alert('Ocorreu um erro no sistema e estamos trabalhando para corrigi-lo. Por favor, tente novamente mais tarde.')
        }
    }

    return (
        <FeedAndPostContainer>
            <Header>
                <p onClick={() => goBack(history)}>Voltar</p>
                <p onClick={()=>logout(history)}>Log Out</p>
            </Header>
            <PostsContainer>
            {posts.map((post)=>{
                return <Post 
                title={post.title}
                userName={post.username}
                text={post.text}
                positiveVote={()=>vote(post.id, post.userVoteDirection, 1)}
                negativeVote={()=>vote(post.id, post.userVoteDirection, -1)}
                numberOfPositiveVotes={post.votesCount}
                likeIcon={post.userVoteDirection === 1 ? likeIconFilled : likeIcon}
                deslikeColor={post.userVoteDirection === -1 ? 'black' : 'white'}
                // numberOfDeslikes={''}
                numberOfComments={post.commentsCount}
                checkDetails={()=>goToPostPage(history, post.id)}
                />
            })}
            </PostsContainer>
        </FeedAndPostContainer>
    )
}
