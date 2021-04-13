import styled from 'styled-components'

export const CardOfTrip = styled.div`
width:18em;
height: 20em;
color:white;
background-image: url('http://jornal.usp.br/wp-content/uploads/20170911_00_planeta_novo.jpg');
border-radius: 10px;
border: 1px solid white;
margin: 2%;
display: flex;
flex-direction: column;
align-items: center;
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
:hover{
    background-image: none;
    color: black;
    background-color: white;
    border: 1px solid black;
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