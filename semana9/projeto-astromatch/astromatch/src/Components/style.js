import styled from 'styled-components'

export const Header = styled.header`
width: 100%;
font-family: 'Edwardian Script ITC';
font-size: 25px;
background-color: #ffbaba;
color: #a70000;
display: flex;
justify-content: space-between;
align-items: center;
height: 10%;
`

export const HeaderButton = styled.p`
margin-right: 0.5em;
background: none;
border: none;
cursor:pointer;
:hover{
    transform: scale(0.9);
    transition: all 0.5s;
}
`

export const Logo = styled.h1`
margin-left: 0.5em;
`

export const HeaderIcon = styled.img`
width: 25px;
`

export const ProfileContainer = styled.main`
margin-top: 1rem;
width: 90%;
height: 70%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@keyframes entrance{
    0%{
        transform: translateY(20px);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 0.3;
    }
}
animation: entrance 0.5s;
`

export const ProfileImage = styled.img`
height: 80%;
width: 90%;
border-radius: 10px;
box-shadow: 0 0 0.3rem 0.3rem #8f9779;
`

export const ProfileDescription = styled.section`
height: 20%;
width:90%;
display: flex;
flex-direction: column;
justify-content: flex-start;
font-family: Arial;
font-size: 1em;
h1{
    margin: 10px 0 0 0;
}
p{
    margin:5px 0 0 0;
}
`

export const ChoiceButton = styled.button`
font-size: 2rem;
border:none;
cursor: pointer;
border: 1px solid ${props => props.color};
border-radius: 50%;
width: 60px;
height:60px;
padding: 0.5rem; 
:hover{
    transform: scale(1.2);
    transition: all 0.5s;
    background-color: ${props => props.color};
}
:active{
    background-color: ${props => props.activeColor};
}
`

export const MatchContainer = styled.section`
height: 10%;
width: 95%;
margin: 0.3rem 0;
display:flex;
align-items: center;
justify-content: flex-start;
font-family: Arial;
p{
    margin-left: 0.5rem;
}
:hover{
    background-color: #ffbaba;
}
`

export const MatchImage = styled.img`
height: 40px;
width: 40px;
border-radius: 50%;
margin-left: 0.3rem;
`

export const LoadingIcon = styled.img`
width: 15%;
@keyframes beat{
    0%{
        transform:scale(1.2);
    }
    100%{
        transform: scace(1);
    }
}
animation: beat 1s;
animation-iteration-count: infinite;
`