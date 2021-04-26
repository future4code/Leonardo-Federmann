import React from 'react'
import {useHistory, useParams} from 'react-router-dom'

export default function PostPage(){
    const pathParams = useParams()
    return <h1>Post with id: {pathParams.postId}</h1>
}