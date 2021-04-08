import styled from 'styled-components'

export const MainContainer = styled.main`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #99aab5;
`

export const PhoneContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
width: 375px;
height: 100vh;
@media(max-width: 800px){
    width: 100%;
}
`

export const ButtonsContainer = styled.section`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 1rem;
`