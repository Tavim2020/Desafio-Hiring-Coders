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
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;

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

        svg{
            fill: var(--dark-blue);
            transition: fill 0.5s;
            cursor: pointer;

            &:hover{
                g g g{
                transition: fill 0.5s;
                    fill: var(--white);
                }
            }
        }
    }

    @media(max-width: 960px){
        width: 40%;

        ul{
            li{
                font-size: 3.5vw;
                margin-left: 3vw;
            }
        }

        .car{
            width: 7vw;
            margin-left: 2vw;
        }
    }
`;