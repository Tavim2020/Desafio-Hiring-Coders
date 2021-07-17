import React from 'react';
import styled from 'styled-components';
import ContainerCentral from '../Container/ContainerCentral';
import Logo from '../Logo/Logo';
import {GlobalContext} from '../../context/GlobalContext';

const FooterContainer = styled.footer`
    width: 100vw;
    height: 15vw;
    background-color: var(--pink);
    font-family: var(--font);

    @media(max-width: 960px){
        height: 33vw;
        padding-top: 3vw;
    }
`;

const TitleContainer = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 1.8vw;
        text-align: center;
        color: var(--dark-blue);
    }

    @media(max-width: 960px){

        h1:nth-child(1){
            margin-top: 4vw;
        }

        h1{
            font-size: 2.9vw;
            text-align: center;
            color: var(--dark-blue);
        }
    }
`;

const Footer = () => {

    const { stateMobile, FooterContainerForScroll } = React.useContext(GlobalContext);
    

   

    return (
        <FooterContainer ref={FooterContainerForScroll}>

            <ContainerCentral
            display={stateMobile ? 'block' : 'flex'}
            alignItems={'center'}>

                <Logo />

                <TitleContainer>

                    <h1>DESENVOLVA-SE NAS TECNOLOGIAS E LINGUAGENS QUE VÃO ACELERAR SUA CARREIRA</h1>
                    <br></br>
                    <h1>OBRIGADO A GAMA ACADEMY, VTEX E TODOS OS PATROCINADORES.</h1>

                </TitleContainer>


            </ContainerCentral>
            
        </FooterContainer>
    )
}

export default Footer;
