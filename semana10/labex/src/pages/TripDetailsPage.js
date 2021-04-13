import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function TripDetailsPage(){
    const pathParams = useParams()
    return <p>Trips Details Page with the id: {pathParams.id}</p>
}