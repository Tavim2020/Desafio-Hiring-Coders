import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';

const ContainerChechedCar = styled.section`
    width: 100%;
    height: 100%;

    .textCar{
        width: 100%;
        height: 4.5vw;
        display: flex;
        align-items: center;

        h2{
            font-size: 2.1vw;
            color: var(--dark-blue);
        }

        svg{
            width: 3vw;
            g g g{
                fill: var(--dark-blue);
            }
        }
    }

    .notBuy{
        width: 100%;
        height: 6.5vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h4{
            font-size: 1.5vw;
        }

        h5{
            font-size: 1.4vw;
            margin-top: 1vw;
            text-decoration: underline;
            color: var(--dark-pink);
            transition: font-size 0.5s;

            &:hover{
                font-size: 1.6vw;
            }
        }
    }


    .myProducts{
        margin: 0 auto;
        width: 60%;
        height: 8vw;
        display: flex;
        align-items: center;
        margin-top: 3vw;
        margin-bottom: 1.5vw;

        .imageDiv{
            width: 20%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            img{
                width: 8vw;
                object-fit: contain;
            }
        }

        .titleAndPriceProducts{
            flex: 1;

            h3{
                font-size: 2.1vw;
                margin-bottom: 1vw;
            }

            div{
                display: flex;
                align-items: center;
                justify-content: space-between;
                h4{
                    font-size: 1.7vw;
                    font-weight: 400;
                }

                button{
                    width: 12vw;
                    height: 3vw;
                    padding-left: 0.5vw;
                    padding-right: 0.5vw;
                    cursor: pointer;
                    background-color: var(--dark-blue);
                    color: var(--white);
                    font-weight: bold;
                    transition: background-color 0.5s filter 0.5s;

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
        width: 30%;
        margin-top: 4.5vw;

        h3:nth-child(1){
            border-top: 0.16vw solid var(--dark-blue);
            margin-top: 1.5vw;
            padding-top: 0.5vw;
        }

        h3{
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--dark-blue);
            font-size: 1.6vw;
        }

        h3:nth-child(2){
            border-bottom: 0.16vw solid var(--dark-blue);
            margin-bottom: 1.5vw;
            padding-bottom: 0.5vw;
            margin-top: 0.5vw;
        }

        h2{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 2.4vw;
            color: var(--dark-blue);
        }
    }

    .confirmMyCar{
        width: 100%;
        height: 5vw;
        display: flex;
        align-items: center;
        justify-content: center;

        button{
            width: 14vw;
            height: 4.2vw;
            background-color: var(--dark-blue);
            color: var(--white);
            font-weight: bold;
            cursor: pointer;
            font-size: 1.3vw;
            transition:background-color 0.5s;

            &:hover{
                background-color: #588ec4fd;
            }
        }
    }
`;

const ContainerCarChecked = () => {

    const { car, countCompras, setCountCompras, carConfirm, setCarConfirm} = React.useContext(GlobalContext);


    const totalProducts = car.reduce((acc, produto) => acc + produto.price, 0);
    const frete = countCompras * 15;

    const total = totalProducts + frete;


    function removeItemCar(event){
        car.splice(event.target.id, 1);
        setCountCompras(countCompras - 1);
    }

    function toggleConfirmMyCar(){
        setCarConfirm(!carConfirm);
    }

    return (
        <ContainerChechedCar>

                {countCompras >= 1 ?
                    (
                        <div className={'textCar'}>

                            <h2>Item(s) no meu </h2>

                            <svg id="Capa_1"
                            viewBox="0 0 19.25 19.25">
                                <g>
                                    <g id="Layer_1_107_">
                                        <g>
                                            <path d="M19.006,2.97c-0.191-0.219-0.466-0.345-0.756-0.345H4.431L4.236,1.461
                                                C4.156,0.979,3.739,0.625,3.25,0.625H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124
                                                c0.016,0.053,0.029,0.103,0.054,0.151c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112
                                                c0.058,0.054,0.125,0.092,0.193,0.13c0.038,0.021,0.071,0.049,0.112,0.065c0.116,0.047,0.238,0.075,0.367,0.075
                                                c0.001,0,11.001,0,11.001,0c0.553,0,1-0.447,1-1s-0.447-1-1-1H6.097l-0.166-1H17.25c0.498,0,0.92-0.366,0.99-0.858l1-7
                                                C19.281,3.479,19.195,3.188,19.006,2.97z M17.097,4.625l-0.285,2H13.25v-2H17.097z M12.25,4.625v2h-3v-2H12.25z M12.25,7.625v2
                                                h-3v-2H12.25z M8.25,4.625v2h-3c-0.053,0-0.101,0.015-0.148,0.03l-0.338-2.03H8.25z M5.264,7.625H8.25v2H5.597L5.264,7.625z
                                                    M13.25,9.625v-2h3.418l-0.285,2H13.25z"/>
                                            <circle cx="6.75" cy="17.125" r="1.5"/>
                                            <circle cx="15.75" cy="17.125" r="1.5"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                        </div> 
                    ): (
                    <div className={"notBuy"}>

                        <h4>Infelizmente ainda não tem nenhum item em seu carrinho, vamos as compras?</h4>

                        <Link to={'/'}>
                            <h5>Bora Comprar!</h5>
                        </Link>

                    </div>
                )}


                {countCompras >= 1 && car.map((produto, index) => 
                    <div className={'myProducts'} key={index}>
                        <div className={'imageDiv'}>

                            <img src={produto.image} alt={produto.title} />

                        </div>

                        <div className={'titleAndPriceProducts'}>

                            <h3>{produto.title}</h3>


                            <div>

                                <h4>Preço: R${produto.price.toFixed(2)}</h4>

                                <button onClick={removeItemCar} id={index} 
                                disabled={!carConfirm ? false : true}>
                                    Remover
                                </button>

                            </div>

                        </div>
                    </div>
                
                ) }


                {countCompras >=1 &&
                    <div className={'total'}>
                        <h3>Preço Total: <span>R${totalProducts.toFixed(2)} </span></h3>
                        <h3>Frete: <span>R${frete}</span></h3>

                        <h2>Total: <span> R${total.toFixed(2)}</span></h2>
                    </div>
                }


                {countCompras >= 1 &&
                    <div className={'confirmMyCar'}>

                        <button onClick={toggleConfirmMyCar}>
                                {!carConfirm ? 'Confirmar Carrinho' : 'Cancelar Carrinho'}
                        </button>

                    </div>
                }

 
        </ContainerChechedCar>
    )
}

export default ContainerCarChecked;
