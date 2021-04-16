import styled from 'styled-components'

export const HomeContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Arial';
`

export const HomePresentation = styled.header`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-image: url('https://2.bp.blogspot.com/-D-RobHLUPbk/Vr2sPCTkBGI/AAAAAAAAymo/qcFBV-yuClw/s1600/earth-moon-from-space.jpg');
h1{
    color: white;
    font-size: 2.5em;
    letter-spacing: 0.2em;
    margin-top: 2.5em;
    @keyframes entrance{
        0%{
            transform: translateY(20px);
            opacity: 0;
        }
    }
    animation: entrance 1s;
}
@media (max-width: 450px){
    h1{
        font-size: 1.5em;
        width: 90%;
    }
}
`

export const HomeContent = styled.section`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: black;
color: white;
h1{
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    animation: entrance 1s;
    text-align: center;
}
@media (max-width: 450px){
    h1{
        font-size: 1em;
        width: 90%;
    }
    img{
        display: none;
    }
    p{
        width: 90%;
    }
}
`

export const HomeDescription = styled.section`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
animation: entrance 1s;
img{
    width: 35%;
    border-radius: 50px 0;
}
p{
    width: 50%;
    line-height: 2em;
}
@media (max-width: 450px){
    img{
        display: none;
    }
    p{
        width: 100%;
    }
}
`

export const HomeButtonsContainer = styled.section`
width: 100%;
height: 100vh;
flex-wrap: wrap;
background-image:url('https://scx2.b-cdn.net/gfx/news/hires/2019/4-space.jpg');
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
button{
    background-color: black;
    border: 1px solid white;
    color: white;
    border-radius: 100px 0;
    font-size: 1.5em;
    padding: 8%;
    :hover, :active{
        background-color: white;
        color: black;
        cursor: pointer;
    }
    @media (max-width: 450px){
        border-radius: 50px 0;
    }
}
`

export const MainContainer = styled.main`
display: flex;
flex-direction: column;
align-items: center;
background-color: black;
color:white;
font-family: 'Arial';
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
`

export const Header = styled.header`
width: 100%;
height: 10%;
color: white;
display: flex;
flex-direction: column;
font-family: 'engravers MT';
background-image:url('https://scx2.b-cdn.net/gfx/news/hires/2019/4-space.jpg');
align-items: center;
justify-content: space-between;
border: 1px solid white;
h2{
    margin-left: 5%;
    font-family: 'engravers MT';
    font-size: 2em;
}
`

export const HeaderButtonsContainer = styled.nav`
display: flex;
align-items: center;
width: 100%;
p{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    border: 1px solid white;
    margin: 0;
    padding: 1% 0;
    :hover, :active{
        background-color: white;
        color: black;
        cursor: pointer;
    }
}
@media (max-width:450px){
    p{
        height: 2.5em;
    }
}
`

export const ListOfTripsContent = styled.section`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`

export const ErrorContainer = styled.main`
background-image:url('https://2.bp.blogspot.com/-D-RobHLUPbk/Vr2sPCTkBGI/AAAAAAAAymo/qcFBV-yuClw/s1600/earth-moon-from-space.jpg');
color: white;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
font-family: 'engravers MT';
@keyframes entrance{
        0%{
            transform: translateY(20px);
            opacity: 0;
        }
    }
h1{
    width: 100%;
    text-align: center;
    font-family: 'engravers MT';
    font-size: 2em;
    animation: entrance 1s;
}
p{
    width: 70%;
    animation: entrance 1s;
}
button{
    font-family: 'engravers MT';
    background: none;
    padding: 1%;
    border-radius: 10%;
    color: white;
    animation: entrance 1s;
    :hover{
        background-color: white;
        color: black;
        cursor: pointer;
    }
}
`

export const LoginContainer = styled.main`
background-image:url('https://2.bp.blogspot.com/-D-RobHLUPbk/Vr2sPCTkBGI/AAAAAAAAymo/qcFBV-yuClw/s1600/earth-moon-from-space.jpg');
color: white;
height: 100vh;
display: flex;
align-items: center;
justify-content: space-around;
font-family: 'engravers MT';
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 20vh;
}
h1{
    width: 100%;
    margin-left: 5%;
    font-family: 'engravers MT';
    font-size: 2em;
}
input{
    background: none;
    color: white;
    border-radius: 5px 0;
    width: 100%;
}
button{
    font-family: 'engravers MT';
    background: none;
    padding: 5%;
    border-radius: 10%;
    :hover{
        background-color: white;
        color: black;
        cursor: pointer;
        transition: all 0.5s;
    }
}
`

export const Login = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@keyframes entrance{
        0%{
            transform: translateY(20px);
            opacity: 0;
        }
    }
    animation: entrance 1s;
`

export const TripsDetailContainer = styled.section`
background-image:url('https://2.bp.blogspot.com/-D-RobHLUPbk/Vr2sPCTkBGI/AAAAAAAAymo/qcFBV-yuClw/s1600/earth-moon-from-space.jpg');
height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
color: white;
h3{
    text-align: center;
    letter-spacing: 0.1em;
    line-height: 2em;
    width: 60%;
    color: white;
}
header{
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: 'engravers MT';
}
form{
    height: 60%;
    width: 60%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-around;
    animation: entrance 1s;
}
input, select{
    width: 60%;
    height: 2em;
    background-color: black;
    color: white;
    border-radius: 10px 0;
    @media (max-width: 450px){
        width: 100%;
    }
}
button{
    background: none;
    border-radius: 10px;
    padding: 0.5%;
    color: white;
    font-family: 'engravers MT';
    :hover{
        background-color: white;
        color: black;
        cursor: pointer;
    }
}
`

export const TripInfo = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
overflow: auto;
animation: entrance 1s;
h3{
    width: 100%;
}
p{
    margin: 0.1em;
    @media(max-width: 450px){
        margin:0 20px;
}
}
`

export const TripCandidates = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
overflow: auto;
animation: entrance 1s;
h3{
    width: 100%;
}
`

export const FormContainer = styled.main`
background-image:url('https://2.bp.blogspot.com/-D-RobHLUPbk/Vr2sPCTkBGI/AAAAAAAAymo/qcFBV-yuClw/s1600/earth-moon-from-space.jpg');
height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
h3{
    text-align: center;
    letter-spacing: 0.1em;
    line-height: 2em;
    width: 60%;
    color: white;
    animation: entrance 1s;
    @media (max-width: 450px){
            display: none;
    }
}
header{
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: 'engravers MT';
}
form{
    height: 60%;
    width: 60%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-around;
    animation: entrance 1s;
}
input, select{
    width: 60%;
    height: 2em;
    background-color: black;
    color: white;
    border-radius: 10px 0;
    @media (max-width: 450px){
        width: 100%;
    }
}
button{
    background: none;
    border-radius: 10px;
    padding: 0.5%;
    color: white;
    font-family: 'engravers MT';
    :hover{
        background-color: white;
        color: black;
        cursor: pointer;
    }
}
`