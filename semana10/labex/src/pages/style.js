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
`

export const HomeButtonsContainer = styled.section`
width: 100%;
height: 100vh;
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
    :hover{
        background-color: white;
        color: black;
        cursor: pointer;
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
`

export const Header = styled.header`
width: 100%;
height: 10%;
color: white;
display: flex;
flex-direction: column;
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
width: 100%;
p{
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
`

export const FiltersContainer = styled.section`
font-family: 'Arial';
width: 20%;
color: white;
background-color: #373854;
border-radius: 20px 0;
padding: 2%;
margin: 2%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
input, button{
    font-family: 'Arial';
    width: 100%;
    height: 30px;
    margin: 0.5em 0;
    background: black;
    color: white;
    padding: 0.2em;
    border-radius: 10px 0;
}
`

export const ListOfTripsContent = styled.section`
height: 100%;
display: flex;
justify-content: space-between;
`

export const ListOfTrips = styled.section`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`

export const LoginContainer = styled.main`
display: flex;
align-items: center;
justify-content: space-around;
`

export const Login = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const TripsDetailContainer = styled.section`
display: flex;
align-items: center;
justify-content: space-around;
`

export const TripInfo = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`

export const TripCandidates = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
overflow-y: scroll;
`