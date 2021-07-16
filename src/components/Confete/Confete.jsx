import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';


const ConfeteContainer = styled.div`
    width: 1.5vw;
    height: 2vw;
    position: absolute;
    animation-name: effectOn;
    animation-delay: ${({time}) => time ? `${time}ms` : '1ms'};
    animation-duration: 4s;
    animation-iteration-count: 4;
    animation-fill-mode: forwards;
    transform: rotateZ(-45deg);
    top: -10%;
    right: ${({left}) => left ? `${left}%` : '0%'};
    z-index: 0;
    @keyframes effectOn{
        20%{
            transform: translateY(0vw) translateX(3vw) rotateZ(45deg) rotateY(180deg);
        }
        40%{
            transform: translateY(16vw) translateX(-3vw) rotateZ(-45deg) rotateY(-180deg);
        }
        60%{
            transform: translateY(20vw) translateX(3vw) rotateZ(45deg) rotateY(180deg);
        }
        80%{
            transform: translateY(24vw) translateX(3vw) rotateZ(-45deg) rotateY(-180deg);
        }
        100%{
            transform: translateY(39vw) translateX(3vw) rotateZ(45deg) rotateY(180deg);
        }
    }

    @media(max-width: 960px){
        width: 3vw;
        height: 4vw;
        animation-duration: 6s;
        @keyframes effectOn{
            8%{
                transform: translateY(0vw) translateX(3vw) rotateZ(45deg) rotateY(180deg);
            }
            16%{
                transform: translateY(16vw) translateX(-3vw) rotateZ(-45deg) rotateY(-180deg);
            }
            24%{
                transform: translateY(23vw) translateX(3vw) rotateZ(45deg) rotateY(180deg);
            }
            32%{
                transform: translateY(36vw) translateX(-3vw) rotateZ(-45deg) rotateY(-180deg);
            }
            40%{
                transform: translateY(45vw) translateX(3vw) rotateZ(45deg) rotateY(180deg);
            }
            48%{
                transform: translateY(57vw) translateX(-3vw) rotateZ(-45deg) rotateY(-180deg);
            }
            56%{
                transform: translateY(72vw) translateX(3vw) rotateZ(45deg) rotateY(180deg);
            }
            64%{
                transform: translateY(88vw) translateX(-3vw) rotateZ(-45deg) rotateY(-180deg);
            }
            72%{
                transform: translateY(104vw) translateX(3vw) rotateZ(45deg) rotateY(180deg);
            }
            80%{
                transform: translateY(121vw) translateX(3vw) rotateZ(45deg) rotateY(180deg);
            }
            88%{
                transform: translateY(138vw) translateX(3vw) rotateZ(45deg) rotateY(180deg);
            }
            100%{
                transform: translateY(145vw) translateX(3vw) rotateZ(45deg) rotateY(180deg);
            }
        }
    }
`;



const Confete = ({color, left, time}) => {

    const { effectConfete } = React.useContext(GlobalContext);

    return (
        <>
            {effectConfete && (
                <ConfeteContainer style={{ backgroundColor: color}} left={left} time={time}>
            
                </ConfeteContainer>
            )}
        </>
    )
}

export default Confete;
