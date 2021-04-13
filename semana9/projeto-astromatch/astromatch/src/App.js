import React, { useState, useEffect } from 'react'
import SeeOptions from './Pages/SeeOptions'
import SeeMatches from './Pages/SeeMatches'

export default function App() {
  const [renderedPage, setRenderedPage] = useState('options')

  useEffect(() => {
    document.title = `Bem vindo ao Astromatch!`
  }, [])

  const checkMatches = () => {
    setRenderedPage('matches')
  }

  const checkOptions = () => {
    setRenderedPage('options')
  }

  return (
    <React.Fragment>
      {renderedPage === 'options' ?
        <SeeOptions
          checkMatches={checkMatches} />
        :
        renderedPage === 'matches' ?
          <SeeMatches
            checkOptions={checkOptions} />
          : <div></div>}
    </React.Fragment>
  );
}


