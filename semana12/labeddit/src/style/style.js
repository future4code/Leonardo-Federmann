import { TextField } from '@material-ui/core'
import styled from 'styled-components'

export const LoginAndRegisterContainer = styled.main`
display: flex;
flex-direction: column;
align-items: center;
`

export const LogoContainer = styled.section`
height: 10vh;
font-family: 'Arial Black';
font-size: 150%;
`

export const LoginAndRegisterForm = styled.form`
display: flex;
width: 30%;
margin:0 10%;
flex-direction: column;
align-items: center;
justify-content: flex-start;
height: 40vh;
div{
    margin: 1em;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
@media (max-width: 800px){
    width: 80%;
}
`

export const StyledTextField = styled(TextField)`
width: 100%;
`

export const FeedAndPostContainer = styled.main`
display: flex;
flex-direction: column;
align-items: center;
`
export const HeaderContainer = styled.header`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;
color: white;
background-color: #2c387e;
h1{
    margin-left: 1em;
    font-family: 'Arial Black';
    font-size: 150%;
}
div{
    margin-right: 1em;
    width: 15%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 450px){
        width: 45%;
    }
    /* @media (min-width: 450px, max-width: 800px){
        width: 25%;
    } */
}
`

export const PostCard = styled.div`
height: 15em;
width: 18em;
overflow: auto;
border: 1.5px solid #2c387e;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
h2{
    background-color: #2c387e;
    color: white;
    height: 2em;
    width: 100%;
    /* border-radius: 10px 10px 0 0; */
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
p{
    width: 90%;
}
section{
    width: 100%;
    height: 3em;
    background-color: #2c387e;
    color: white;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1em;
    }
    button{
        text-align: center;
        background: none;
        border: none;
        margin: 0;
        cursor: pointer;
        p{
            margin-right:0.5em;
            transform: scale(1.2);
        }
    }
    b{
        margin-left:2.5em;
    }
}

`
