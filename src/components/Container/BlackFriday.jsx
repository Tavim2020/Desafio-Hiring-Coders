import React from 'react';
import styled from 'styled-components';
import BlackFridayLogo from '../../assets/blackfriday.svg';
import ContainerCentral from './ContainerCentral';
import Celular from '../../assets/cel.png';
import Confete from '../Confete/Confete';
import { GlobalContext } from '../../context/GlobalContext';

const BlackFridayContainer = styled.section`
    width: 100vw;
    height: 35vw;
    background-color: var(--dark-blue);
    font-family: var(--font);
    position: relative;
    overflow: hidden;

    @media(max-width: 960px){
        height: 120vw;
        display: block;
    }
`;

const LogoBlackFriday = styled.div`
    width: 100vw;
    height: 6vw;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 17vw;
    }

    @media(max-width: 960px){
        height: 19vw;

        img{
            width: 38vw;
        }
    }
`;

const Produto = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
        width: 24vw;
    }

    @media(max-width: 960px){
        margin: 0 auto;
        width: 80%;
        height: 40vw;
        align-items: flex-start;
        margin-top: 7vw;
        
        img{
            width: 55vw;
        }
    }
`;

const Text = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
        width: 80%;
        font-size: 1.7vw;
        color: var(--white);

        span{
            color: var(--dark-pink);
            text-decoration: line-through;
        }

        strong{
            color: var(--green);
        }
    }

    div{
        width: 8vw;
        height: 4vw;

        button{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--dark-blue);
            background-color: var(--pink);
            border-radius: 1.2vw;
            font-size: 1.2vw;
            margin-top: 1vw;
            font-weight: 600;
            border: 0;
            cursor: pointer;
            transition: 0.5s;

            &:hover{
                color: var(--white);
                background-color: var(--dark-pink);
            }
        }
    }

    @media(max-width: 960px){
        margin: 0 auto;
        width: 80%;
        height: 40vw;
        align-items: flex-start;
        justify-content: center;
        margin-top: 8vw;

        h3{
            margin: 0 auto;
            width: 80%;
            font-size: 3vw;
        }

        div{
            margin: 0 auto;
            width: 20vw;
            height: 9vw;

            button{
                font-size: 2.7vw;
                margin-top: 3vw;
            }
        }
    }
`;

const color = [];

color[0] = "green";
color[1] = "blue";
color[2] = "red";
color[3] = "pink";
color[4] = 'yellow';
color[5] = "purple";
color[6] = "orange";
color[7] = "black";
color[8] = "green";
color[9] = "blue";
color[10] = "red";
color[11] = "pink";
color[12] = "yellow";
color[13] = "purple";
color[14] = "orange";
color[15] = "black";


const BlackFriday = () => {

    const { setEffectConfete, effectConfete, stateMobile, 
            car, setCountCompras, countCompras} = React.useContext(GlobalContext);
    const TimeOut = React.useRef(null);

    

    function confeteON(){
        setEffectConfete(true);
    }

    React.useEffect(()=>{
        if(effectConfete){
            TimeOut.current = setTimeout(()=>{
                setEffectConfete(false);
            }, 13000)
        }
        else{
            if(TimeOut.current){
                clearTimeout(TimeOut.current);
            }
        }

    }, [setEffectConfete, effectConfete])

    function buyCel(){
        const cell = {
            title: 'Smartphone Multilaser F Pro 16gb 1gb Android Dual Sim P9119',
            price: 430.19,
            description: 'Celular Multilaser Promoção',
            category: 'Eletro Eletronicos',
            id: 21,
            image: `${Celular}`,
        };

        car.push(cell);
        setCountCompras(countCompras + 1)
    }

    return (
        <BlackFridayContainer onMouseOver={confeteON}>

            <Confete color={color[0]} />
            <Confete color={color[1]} left={6} time={100} />
            <Confete color={color[2]} left={12} time={350} />
            <Confete color={color[3]} left={18} time={550} />
            <Confete color={color[4]} left={24} time={432} />
            <Confete color={color[5]} left={30} time={754} />
            <Confete color={color[6]} left={36} time={945} />
            <Confete color={color[7]} left={42} time={743} />
            <Confete color={color[8]} left={48} time={1043} />
            <Confete color={color[9]} left={54} time={425} />
            <Confete color={color[10]} left={60} time={568} />
            <Confete color={color[11]} left={66} time={954} />
            <Confete color={color[12]} left={72} time={1234} />
            <Confete color={color[13]} left={78} time={435} />
            <Confete color={color[14]} left={84} time={743} />
            <Confete color={color[15]} left={90} time={867} />
            <Confete color={color[1]} left={96} time={643} />
            <Confete color={color[2]} left={102} time={1056} />
            <Confete color={color[3]} left={104} time={120} />

            <LogoBlackFriday >

                <img src={BlackFridayLogo} alt={'Logo-Black-Friday'} title={'Logo BlackFriday'} />

            </LogoBlackFriday>

            <ContainerCentral
            display={stateMobile ? 'block' : 'flex'}>

                <Produto>

                    <img src={Celular} alt={'Celular'} />

                </Produto>

                <Text>
                    <h3>Smartphone Multilaser F Pro 16gb 1gb Android Dual Sim P9119</h3>
                    <h3>de <span>R$ 503,15</span></h3>
                    <h3>por <strong>R$430,19</strong> à vista<strong>(10% de desconto)</strong></h3>
                    <h3>ou R$ 477,99 em 12x de R$ 39,83 sem juros</h3>

                    <div>
                        <button onClick={buyCel}>
                            Comprar
                        </button>
                    </div>

                </Text>

            </ContainerCentral>
            
        </BlackFridayContainer>
    )
}

export default BlackFriday;
