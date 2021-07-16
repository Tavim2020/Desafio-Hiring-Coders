import styled from 'styled-components';

export const ContainerAnimation = styled.section`
    width: 50%;
    height: 43.6vw;
    background-color: var(--dark-blue);
    overflow: hidden;

    @media(max-width: 960px){
        width: 100%;
        height: 140vw;
    }
`;


export const ContainerAnimationProduct = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;


    .centerText{
        width: 70%;
        text-align: center;
        font-size: 2.5vw;
        font-family: var(--font);
        z-index: 2;
        color: var(--white);
        animation-name: show;
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 3;
        animation-delay: 10ms;
        animation-fill-mode: forwards;
        animation-direction: alternate;
        @keyframes show{
            20%{
                transform: scale3d(1.3, 1.3, 0.5);
            }
            80%{
                opacity: 0;
            }
            86%{
                opacity: 1;
            }
            92%{
                opacity: 0;
            }
            98%{
                opacity: 1;
            }


        }
    }


    .balloons1,
    .balloons2,
    .balloons3,
    .balloons4,
    .balloons5,
    .balloons6,
    .balloons7{
        position: absolute;
        bottom: -30%;
        animation-name: moveBalloons;
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 3;
        animation-direction: normal;
        @keyframes moveBalloons{
            to{
                transform: translateY(-120vh);
            }
        }

    }

    .balloons1{
        width: 7vw;
        right: 53%;
        animation-delay: 50ms;
    }

    .balloons2{
        width: 11vw;
        left: 16%;
        animation-delay: 250ms;
    }

    .balloons3{
        width: 3vw;
        left: 86%;
        animation-delay: 120ms;
    }

    .balloons4{
        width: 5vw;
        left: 62%;
        animation-delay: 330ms;
    }

    .balloons5{
        width: 8vw;
        left: 12%;
        animation-delay: 450ms;
    }

    .balloons6{
        width: 2vw;
        left: 93%;
        animation-delay: 500ms;
    }

    .balloons7{
        width: 10vw;
        left: 75%;
        animation-delay: 267ms;
    }


    .promocoes{
        width: 2vw;
        opacity: ${({animationMoreImages}) => animationMoreImages ? '1' : '0' };
        transition: 0.5s;
        animation-name: showPromocoes;
        animation-iteration-count: 1;
        animation-delay: 30ms;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        z-index: 7;
        @keyframes showPromocoes{
            30%{
                transform: translateY(-8vw) scale3d(2.5, 2.5, 0.8);
                opacity: 1;
            }
            60%{
                transform: translateY(-4vw) scale3d(5.5, 5.5, 0.6);
                opacity: 1
            }
            100%{
                transform: translateY(0vw) scale3d(10, 10, 0.3);
                opacity: 1;
            }
        }
    }

    .blackfriday{
        width: 22vw;
        opacity: 0;
        transition: 0.5s;
        animation-name: blackfriday;
        animation-duration: 4s;
        animation-delay: 200ms;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        @keyframes blackfriday{
            0%{
                transform: translateX(-5vw);
                opacity: 1;
                transition: 0.5s;
            }
            10%{
                transform: translateX(0vw);
                opacity: 0;
                transition: 0s;
            }
            20%{
                transform: translateY(5vw);
                opacity: 1;
                transition: 0.5s;
            }
            30%{
                transform: translateY(0vw);
                opacity: 0;
                transition: 0s;
            }
            40%{
                transform: translateX(5vw);
                opacity: 1;
                transition: 0.5s;
            }
            50%{
                transform: translateX(0vw);
                opacity: 0;
                transition: 0s;
            }
            60%{
                transform: translateY(-5vw);
                opacity: 1;
                transition: 0.5s;
            }
            70%{
                transform: translateY(0vw);
                opacity: 0;
                transition: 0.5s;
            }
            80%{
                opacity: 0;
                transition: 0.5s;
            }
            85%{
                opacity: 1;
                transition: 0.5s;
            }
            90%{
                opacity: 0;
                transition: 0.5s;
            }
            95%{
                opacity: 1;
                transition: 0.5s;
            }
            100%{
                opacity: 0;
                transition: 0.5s;
            }
        }
    }

    @media(max-width: 960px){
        width: 100%;

        .centerText{
            font-size: 6vw;
        }


        .balloons1,
        .balloons2,
        .balloons3,
        .balloons4,
        .balloons5,
        .balloons6,
        .balloons7{
            bottom: -30%;
            animation-duration: 5s;
            animation-iteration-count: 2;
            @keyframes moveBalloons{
                to{
                    transform: translateY(-150vh);
                }
            }

        }

        .balloons1{
            width: 16vw;
        }

        .balloons2{
            width: 22vw;
        }

        .balloons3{
            width: 9vw;
        }

        .balloons4{
            width: 13vw;
        }

        .balloons5{
            width: 16vw;
        }

        .balloons6{
            width: 5vw;
        }

        .balloons7{
            width: 20vw;
        }


        .promocoes{
            width: 5vw;
            
            @keyframes showPromocoes{
                60%{
                    transform: translateY(-22vw) scale3d(8.5, 8.5, 0.5);
                    opacity: 1
                }
                100%{
                    transform: translateY(0vw) scale3d(14, 14, 0.2);
                    opacity: 1;
                }
            }
        }

        .blackfriday{
            width: 53vw;
            @keyframes blackfriday{
                0%{
                    transform: translateX(-12vw);
                    opacity: 1;
                    transition: 0.5s;
                    
                }
                10%{
                    transform: translateX(0vw);
                    opacity: 0;
                    transition: 0s;
                }
                20%{
                    transform: translateY(12vw);
                    opacity: 1;
                    transition: 0.5s;
                }
                30%{
                    transform: translateY(0vw);
                    opacity: 0;
                    transition: 0s;
                }
                40%{
                    transform: translateX(12vw);
                    opacity: 1;
                    transition: 0.5s;
                }
                50%{
                    transform: translateX(0vw);
                    opacity: 0;
                    transition: 0s;
                }
                60%{
                    transform: translateY(-12vw);
                    opacity: 1;
                    transition: 0.5s;
                }
                70%{
                    transform: translateY(0vw);
                    opacity: 0;
                    transition: 0.5s;
                }
                80%{
                    opacity: 0;
                    transition: 0.5s;
                }
                85%{
                    opacity: 1;
                    transition: 0.5s;
                }
                90%{
                    opacity: 0;
                    transition: 0.5s;
                }
                95%{
                    opacity: 1;
                    transition: 0.5s;
                }
                100%{
                    opacity: 0;
                    transition: 0.5s;
                }
            }
        }
    }
    
`;

export const Animation = styled.div`
    width: 12vw;
    height: 12vw;
    position: absolute;
    bottom: -5%;
    left: -5%;
    animation-name: moveCenter;
    animation-duration: 3s;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-direction: normal;
    animation-timing-function: linear;
    @keyframes moveCenter{
        80%{
            transform: translate3d(21vw, -18vw, 0);
        }

        100%{
            transform: translate3d(21vw, -18vw, 0) rotateZ(-45deg);
        }
    }

    @media(max-width: 960px){
        width: 28vw;
        height: 28vw;
        @keyframes moveCenter{
            80%{
                transform: translate3d(40vw, -45vw, 0);
            }

            100%{
                transform: translate3d(40vw, -58.5vw, 0) rotateZ(-45deg);
            }
        }
    }
`;  


export const EmailAnimate = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    .asaLeft{
        position: absolute;
        width: 40%;
        top: 10%;
        left: 15%;
        animation-name: moveLeftAsa;
        transition: 1s;
        opacity:  ${({asatrueandeffecttrue}) => asatrueandeffecttrue ? '1' : '0'};
        visibility:  ${({asatrueandeffecttrue}) => asatrueandeffecttrue ? 'visible' : 'hidden'};
        animation-duration: 1s;
        animation-delay: 0ms;
        animation-iteration-count: 3;
        animation-direction: normal;
        @keyframes moveLeftAsa{
            50%{
                transform: rotateY(45deg) ;
            }
            100%{
                transform: initial;
            }
        }

    }

    .capaEmail{
        position: absolute;
        width: 40%;
        top: 18%;
        left: 45%;
        z-index: 11;
        animation-name: ${({openenvelop}) => openenvelop ? 'openEmail' : ''};
        opacity: 0;
        animation-duration: 2s;
        animation-delay: 0ms;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-direction: normal;
        @keyframes openEmail{
            to{
                opacity: 1;
                transform: rotate3d(2,2,0, 180deg);
            }
        }

    }

    .centerEmail{
        position: absolute;
        width: 60%;
        top: 20%;
        right: 15%;
        z-index: 10;

        animation-name: moveEmail;
        animation-duration: 1s;
        animation-delay: 0ms;
        animation-iteration-count: 3;
        animation-direction: normal;
        @keyframes moveEmail{
            50%{
                transform: translateY(0.15vw) translateX(-0.3vw);
            }
            100%{
                transform: initial;
            }
        }
    }

    .asaRight{
        position: absolute;
        width: 27%;
        top: 51%;
        right: 6.7%;
        transition: 1s;
        opacity:  ${({asatrueandeffecttrue}) => asatrueandeffecttrue ? '1' : '0'};
        visibility:  ${({asatrueandeffecttrue}) => asatrueandeffecttrue ? 'visible' : 'hidden'};
        animation-name: moveRightAsa;
        animation-duration: 1s;
        animation-delay: 0ms;
        animation-iteration-count: 3;
        animation-direction: normal;
        @keyframes moveRightAsa{
            50%{
                transform:  rotate3d(-1, -1.5, 0, -45deg);
            }
            100%{
                transform: initial;
            }
        }
    }

    .efeitoLeft{
        width: 2vw;
        position: absolute;
        bottom: 29%;
        left: 10%;
        transition: 1s;
        opacity:  ${({asatrueandeffecttrue}) => asatrueandeffecttrue ? '1' : '0'};
        visibility:  ${({asatrueandeffecttrue}) => asatrueandeffecttrue ? 'visible' : 'hidden'};
        animation-name: moveeffectLeft;
        animation-duration: 1s;
        animation-delay: 0ms;
        animation-iteration-count: 5;
        animation-direction: normal;
        @keyframes moveeffectLeft{
            50%{
                transform:  translateY(0.35vw) translateX(-0.3vw);
            }
            100%{
                transform: initial;
            }
        }
    }

    .efeitoCenter{
        width: 20%;
        position: absolute;
        bottom: 18%;
        left: 19%;
        transition: 1s;
        opacity:  ${({asatrueandeffecttrue}) => asatrueandeffecttrue ? '1' : '0'};
        visibility:  ${({asatrueandeffecttrue}) => asatrueandeffecttrue ? 'visible' : 'hidden'};
        animation-name: moveeffectCenter;
        animation-duration: 1s;
        animation-delay: 0ms;
        animation-iteration-count: 5;
        animation-direction: normal;
        @keyframes moveeffectCenter{
            50%{
                transform:  translateY(0.20vw) translateX(-0.3vw);
            }
            70%{
                transform:  translateY(-0.10vw) ;
            }

            100%{
                transform: initial;
            }
        }
    }

    .efeitoRight{
        width: 2vw;
        position: absolute;
        bottom: 12%;
        right: 51%;
        transition: 1s;
        opacity:  ${({asatrueandeffecttrue}) => asatrueandeffecttrue ? '1' : '0'};
        visibility:  ${({asatrueandeffecttrue}) => asatrueandeffecttrue ? 'visible' : 'hidden'};
        animation-name: moveeffectRight;
        animation-duration: 1s;
        animation-delay: 0ms;
        animation-iteration-count: 3;
        animation-direction: normal;
        @keyframes moveeffectRight{
            50%{
                transform:  translateY(0.35vw) translateX(-0.3vw);
            }
            100%{
                transform: initial;
            }
        }
    }

    @media(max-width: 960px){
        .efeitoLeft{
            width: 5vw;
           
            @keyframes moveeffectLeft{
                50%{
                    transform:  translateY(0.70vw) translateX(-0.6vw);
                }
            }
        }

        .efeitoRight{
            width: 5.5vw;
            @keyframes moveeffectRight{
                50%{
                    transform:  translateY(0.70vw) translateX(-0.6vw);
                }
            }
        }
    }

`;
