import { TextField } from '@material-ui/core'
import styled from 'styled-components'

export const LoginAndRegisterContainer = styled.main`
height: 100vh;
/* color: white; */
display: flex;
flex-direction: column;
align-items: center;
/* background-image:url('https://www.ufrgs.br/setorsuinos/wp-content/uploads/2019/07/fundo-azul-degrade-2.jpg'); */
/* background-image: url('https://static.vecteezy.com/ti/vetor-gratis/p1/1866145-papel-de-parede-de-azul-claro-gradiente-poligono-vetor.jpg'); */
background-image: url('https://static.vecteezy.com/ti/vetor-gratis/p1/1968194-luz-azul-gradiente-desfoque-fundo-vetor.jpg');
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
position: relative;
/* overflow-y: auto; */
`
export const HeaderContainer = styled.header`
/* position: sticky; */
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;
color: white;
background-color: #2c387e;
h1{
    /* margin-left: 1em; */
    font-family: 'Arial Black';
    font-size: 150%;
}
div{
    /* margin-right: 1em; */
    height: 5vh;
    /* width: 15%; */
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: space-around;
    /* @media (max-width: 450px){
        width: 45%;
    } */
    /* @media (min-width: 450px, max-width: 800px){
        width: 25%;
    } */
}
p{
    font-family: 'Arial';
    margin: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    :hover{
        cursor: pointer;
        background-color: white;
        color: #2c387e;
    }
}
`

export const PostsContainer = styled.section`
width: 100%;
height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
overflow-y: auto;
`

export const PostCard = styled.div`
position: relative;
margin-bottom: 2em;
/* min-height: 10em; */
max-height: 18em;
width: 50%;
/* overflow-y: auto; */
border: 1.5px solid #2c387e;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
@media (max-width: 450px){
    width: 90%;
}
strong{
    width: 100%;
    text-align: left;
}
h3{
    border-radius: 10px 10px 0 0;
    background-color: #2c387e;
    color: white;
    height: 4em;
    width: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
/* p{
    width: 90%;
} */
section{
    border-radius: 0 0 10px 10px;
    width: 100%;
    height: 3em;
    background-color: #2c387e;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* div{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1em;
    } */
    button{
        text-align: center;
        background: none;
        border: none;
        /* margin-left: 5px; */
        color: ${props=>props.buttonColor};
        cursor: pointer;
        p{
            margin-left:500px;
            transform: scale(1.5);
        }
    }
    b{
        margin-right:0.5em;
        cursor: pointer;
    }
}
`

export const LikesContainer = styled.div`
/* width:40%; */
display: flex;
align-items: center;
justify-content: flex-start;
margin: 0;
div{
        display: flex;
        align-items: center;
        justify-content: center;
        /* margin-right: 1em; */
    }
`

export const Text = styled.p`
overflow-y: auto;
width: 100%;
align-self: right;
margin-top: 0.5em;
`

export const CommentsContainer = styled.section`
width: 100%;
height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
overflow-y: auto;
`

export const CommentCard = styled.div`
position: relative;
margin-bottom: 2em;
/* min-height: 10em; */
max-height: 18em;
width: 50%;
/* overflow-y: auto; */
border: 1.5px solid #2c387e;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
@media (max-width: 450px){
    width: 90%;
}
strong{
    width: 100%;
    text-align: left;
}
h3{
    border-radius: 10px 10px 0 0;
    background-color: #2c387e;
    color: white;
    height: 4em;
    width: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
/* p{
    width: 90%;
} */
section{
    border-radius: 0 0 10px 10px;
    width: 100%;
    height: 3em;
    background-color: #2c387e;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* div{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1em;
    } */
    button{
        text-align: center;
        background: none;
        border: none;
        /* margin-left: 5px; */
        color: ${props=>props.buttonColor};
        cursor: pointer;
        p{
            margin-left:500px;
            transform: scale(1.5);
        }
    }
    b{
        margin-right:0.5em;
        cursor: pointer;
    }
}
`