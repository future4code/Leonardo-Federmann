import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { LoginAndRegisterForm, StyledTextField, ErrorContainer, LogoContainer } from '../style/style'
import { useForm } from '../custom hooks and functions/useForm'
import { goToFeed, goToRegister, goToLogin } from '../coordinator/Coordinator'
import { useLanguages } from '../custom hooks and functions/useLanguages'
import LanguagesMenu from '../components/LanguagesMenu'
import { languages } from '../languages/languages'
import { LanguageContext } from '../globalContext/LanguageContext'

export default function ErrorPage() {
    const history = useHistory()
    const [language, setLanguage, menu, setMenu, changeLanguage] = useContext(LanguageContext)
    return (
        <ErrorContainer>
            <LanguagesMenu />
            <h1>{languages[language].errorPageTitle}</h1>
            <p>{languages[language].errorPageText}</p>
            <div>
                <Button variant="contained" color="primary" onClick={() => goToLogin(history)}>{languages[language].goToHome}</Button>
                <Button color="primary" variant="contained" onClick={() => setMenu(true)}>{languages[language].changeLanguage}</Button>
            </div>
        </ErrorContainer>
    )
}