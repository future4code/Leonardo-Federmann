import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import SeeOptions from './Pages/SeeOptions'
import SeeMatches from './Pages/SeeMatches'

export default function App() {
  const [renderedPage, setRenderedPage] = useState('options')

  const checkMatches = () =>{
    setRenderedPage('matches')
  }

  const checkOptions = () =>{
    setRenderedPage('options')
  }

  return (
    <div>
      {renderedPage === 'options' ?
        <SeeOptions 
        checkMatches={checkMatches}/>
        :
        renderedPage === 'matches' ?
          <SeeMatches 
          checkOptions={checkOptions}/>
          : <div></div>}
    </div>
  );
}


