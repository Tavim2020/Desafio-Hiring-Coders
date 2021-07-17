import React from 'react';
import styled from 'styled-components';
import IconEmail from '../../assets/email.png';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const MenuFluterContainer =  styled.div`
    position: fixed;
    width: 21vw;
    height: 5vw;
    bottom: 3%;
    right: 3%;
    display: flex;
    align-items: center;
    background-color: var(--dark-pink);
    border-radius: 1.2vw;
    cursor: pointer;

    img{
        width: 4vw;
    }

    h6{
        font-size: 0.9vw;
        text-align: center;
        color: var(--white);
    }

    &:hover{
        box-sizing: content-box;
        border: 0.16vw solid var(--dark-blue);
    }

    @media(max-width: 960px){
        width: 30vw;
        height: 10vw;

        img{
            width: 7vw;
        }

        h6{
            font-size: 2vw;
        }

    }
`;

const MenuFlutuante = () => {

    const { stateMenuFlutuante, FooterContainerForScroll, 
        stateMobile, setStateMenuFlutuante, footer } = React.useContext(GlobalContext);

    React.useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(FooterContainerForScroll.current){
                if(stateMobile){
                    if(window.scrollY >= FooterContainerForScroll.current.offsetTop - 1200){
                        setStateMenuFlutuante(false);
                    }
                    else{
                        setStateMenuFlutuante(true);
                    }
                }
                else{
                    if(window.scrollY >= FooterContainerForScroll.current.offsetTop - 500){
                        setStateMenuFlutuante(false);
                    }
                    else{
                        setStateMenuFlutuante(true);
                    }
                }
            }
        })
    }, [stateMenuFlutuante, setStateMenuFlutuante, footer, FooterContainerForScroll, stateMobile])

    return (
        <>
            {stateMenuFlutuante && (
            <Link to={'/cadastropromocoes'}>
                <MenuFluterContainer>

                    <img src={IconEmail} alt={'Icon-Email'} />

                    <h6>Cadastre seu Email para Receber Promoções!</h6>
                    
                </MenuFluterContainer>
            </Link>)}
        </>
    )
}

export default MenuFlutuante;
