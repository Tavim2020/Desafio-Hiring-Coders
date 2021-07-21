import styled from 'styled-components';



export const HeaderContainer = styled.header`
    width: 100vw;
    height: 4.5vw;
    background-color: #FFCEE0;
    font-family: var(--font);

    @media(max-width: 960px){
        height: 12vw;
    }
`;



export const DivTextAndCar = styled.nav`
    width: 24%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative; 

    ul{
        display: flex;
        align-items: center;

        li{
            font-size: 1.2vw;
            color: var(--dark-blue);
            margin-left: 2vw;
            font-weight: 600;
            cursor: pointer;
            transition: color 0.5s;

            &:hover{
                color: var(--white);
            }
        }
    }

    .car{
        width: 4vw;
        height: 100%;
        margin-left: 1vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative; 
        z-index: 12;
        

        &:hover{
            svg g g g{
            transition: fill 0.5s;
                fill: var(--white);
            }

            .carCount{
                background-color: var(--dark-blue);
                
                h5{
                    color: var(--white);

                }
            }
        }

        svg{
            width: 100%;
            fill: var(--dark-blue);
            transition: fill 0.5s;
            cursor: pointer;
        }


        .carCount{
            position: absolute;
            width: 1.5vw;
            height: 1.5vw;
            border-radius: 50%;
            background-color: var(--white);
            display: flex;
            cursor: pointer;
            align-items: center;
            justify-content: center;
            top: 3%;
            right: 13%;
            transition: background-color 0.5s;
            
            h5{
                color: var(--dark-blue);
                font-family: var(--font);
                font-size: 1.2vw;
                transition: color 0.5s;
            }
        }


        .compras{
            width: 20vw;
            height: max-content;
            position: absolute;
            top: 0%;
            right: 0%;
            background-color: var(--white);
            z-index: 12;
            box-sizing: content-box;

            &:hover{
                border: 0.16vw solid var(--dark-blue);
            }

            .divImg{
                width: 100%;
                height: 2vw;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding-right: 1%;
                img{
                    width: 1.5vw;
                    cursor: pointer;
                    transition: 1s;

                    &:hover{
                        transform: rotateZ(90deg);
                    }
                }
            }

            .listProducts{
                width: 100%;
                display: flex;
                align-items: center;
                height: 7.5vw;

                .listImage{
                    width: 30%;
                    padding-left: 1vw;

                    img{
                        width: 3vw;
                        object-fit: contain;
                    }
                }

                .NameAndPrice{
                    width: 70%;
                    padding-right: 1vw;

                    h3{
                        width: 100%;
                        font-size: 1.1vw;
                        color: var(--dark-blue);
                    }

                    div{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        h4{
                            font-size: 1vw;
                            font-weight: 400;
                            color: var(--dark-blue);
                        }

                        button{
                            width: 6vw;
                            padding-left: 0.5vw;
                            padding-right: 0.5vw;
                            cursor: pointer;
                            background-color: var(--dark-blue);
                            color: var(--white);
                            font-weight: bold;
                            transition: background-color 0.5s filter 0.5s;
                            font-size: 1.1vw;

                            &:disabled{
                                filter: brightness(0.6);
                            }

                            &:enabled:hover{
                                background-color: #588ec4fd;
                                filter: brightness(1);
                            }
                        }
                    }
                }
            }

            .total{
                margin: 0 auto;
                width: 90%;
                margin-top: 1vw;
                border-top: 0.16vw solid var(--dark-blue);
                padding-top: 0.5vw;
                h3{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-weight: 400;
                    padding-bottom: 0.5vw;
                    font-size: 1.2vw;
                    color: var(--dark-blue);
                    span{
                        font-weight: bold;
                    }
                }

                h3:nth-child(2){
                    border-bottom: 0.16vw solid var(--dark-blue);
                }

                h2{
                    font-size: 1.5vw;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 1vw;
                    color: var(--dark-blue);
                }
            }

            .checkOut{
                width: 6vw;
                height: 3.5vw;
                margin-left: 65%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1vw;
                background-color: var(--dark-blue);
                color: var(--white);
                cursor: pointer;
                transition: background-color 0.5s;
                font-size: 1.3vw;

                &:hover{
                    background-color: #588ec4fd;
                }
            }
        }
    }

    @media(max-width: 960px){
        width: 65%;

        ul{
            li{
                font-size: 3.3vw;
                margin-left: 3vw;
            }
        }

        .car{
            width: 7vw;
            margin-left: 2vw;

            .carCount{
                width: 3.2vw;
                height: 3.2vw;

                h5{
                    font-size: 2.7vw;
                }
            }
            .compras{
                width: 100.01vw;
                top: 0%;
                right: -93.7142%;
                border-bottom: 0.4vw solid var(--dark-blue);
    
                .divImg{
                    height: 8vw;
                    padding-right: 5%;
                    padding-top: 1vw;
                    img{
                        width: 6vw;
                    }
                }
    
                .listProducts{
                    height: 27vw;
    
                    .listImage{
                        padding-left: 7vw;
    
                        img{
                            width: 16vw;
                        }
                    }
    
                    .NameAndPrice{
                        padding-right: 5vw;
    
                        h3{
                            font-size: 3.4vw;
                            
                        }
    
                        div{
                            h4{
                                font-size: 3.1vw;
                            }
    
                            button{
                                width: 21vw;
                                padding-left: 1.5vw;
                                padding-right: 1.5vw;
                                padding-top: 1vw;
                                padding-bottom: 1vw;
                                font-size: 2.7vw;
                            }
                        }
                    }
                }
    
                .total{
                    margin-top: 5vw;
                    border-top: 0.4vw solid var(--dark-blue);
                    padding-top: 2.5vw;
                    h3{
                        padding-bottom: 2.5vw;
                        font-size: 3.2vw;
                    }
    
                    h3:nth-child(2){
                        border-bottom: 0.4vw solid var(--dark-blue);
                    }
    
                    h2{
                        font-size: 3.9vw;
                        margin-bottom: 4vw;
                        margin-top: 1vw;
                    }
                }
    
                .checkOut{
                    width: 22vw;
                    height: 8vw;
                    margin-left: 73%;
                    margin-bottom: 4vw;
                    font-size: 3.2vw;
                }
            }
        }

    }
`;