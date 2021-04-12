import React from 'react'
import {HomeContainer, HomePresentation, HomeContent, HomeDescription, HomeButtonsContainer} from './style'

export default function HomePage(){

    return <HomeContainer>
        <HomePresentation>
            <h1>VOCÊ CONHECE O NOSSO SISTEMA SOLAR?</h1>
        </HomePresentation>
        <HomeContent>
            <h1>Sabia que é possível conhecê-lo com a Labe X?</h1>
            <HomeDescription>
            <img src={'https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/10/16/saiba-como-o-ciclo-de-saturno-influencia-na-perspectiva-profissional-16094.jpg'} alt="Saturno"/>
            <p>Você já teve a oportunidade de ver, com os próprios olhos, os anéis de Saturno? Ou de, estando na Lua, tentar encontrar as luzes da sua cidade ao olhar para a Terra? Talvez de pegar o melhor bronzeado da sua vida em Mercúrio, o planeta mais próximo ao Sol? Esse é nosso propósito, nossa missão. <br></br>
            A Labe X irá te levar aos confins de nosso sistema planetário. De Mercúrio a Plutão, da Lua ao Cinturão de Asteróides de Kuiper, nossas opções de viagens incluem os mais variados e exóticos destinos. Venha, aproveite e embarque nessa aventura rumo aos mistérios siderais que orbitam em torno de nosso Astro-Rei!</p>
            </HomeDescription>
        </HomeContent>
        <HomeButtonsContainer>
                <button>Sou passageiro</button>
                <button>Sou tripulante</button>
            </HomeButtonsContainer>
    </HomeContainer>
}