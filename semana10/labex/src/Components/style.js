import styled from 'styled-components'

export const CardOfTrip = styled.div`
width:18em;
height: 16em;
overflow: auto;
color:white;
background: none;
border-radius: 10px;
border: 1px solid white;
margin: 2%;
display: flex;
flex-direction: column;
align-items: center;
h1{
    text-transform: uppercase;
    margin-bottom: 0;
    padding: 0.5em;
    text-align: center;
    margin-top: 5%;
}
div{
    margin-top: 0;
    padding: 0.5em;
}
p{
  margin: 1%;
}
button{
    color: white;
    background: none;
    font-family: 'engravers MT';
    padding: 2%;
    border-radius: 10px 0;
    :hover, :active{
        color: black;
        background-color: white;
    }
}
`

export const ButtonsContainer = styled.section`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
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

export const CandidateCard = styled.section`
width:90%;
height: 5em;
color:white;
overflow: auto;
border-radius: 10px;
border: 1px solid white;
margin: 2%;
display: flex;
flex-direction: column;
align-items: center;
background-color: black;
h1{
    text-transform: uppercase;
    margin-bottom: 0;
    padding: 1em;
    text-align: center;
}
div{
    margin-top: 0;
    padding: 1em;
}
button{
  margin-bottom: 20px;
}
p{
    margin: 2px;
}
`