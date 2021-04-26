import React from 'react'
import Routes from './routes/Routes'
import {ThemeProvider} from '@material-ui/core/styles'
import {Theme} from './theme/Theme'

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
       <Routes />
    </ThemeProvider>
  )
}

