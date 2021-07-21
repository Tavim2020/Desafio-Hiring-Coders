import React from 'react';
import styled from 'styled-components';
import ContainerCentral from '../components/Container/ContainerCentral';
import { GlobalContext } from '../context/GlobalContext';
import IconForm from '../assets/form.svg';
import FormDetailsClient from '../components/FormDetailsClient/FormDetailsClient';
import DivOrdemPayment from '../components/DivOrdemPayment/DivOrdemPayment';
import FormConfirmSendProducts from '../components/FormConfirmSendProducts/FormConfirmSendProducts';
import CheckIcon from '../assets/check.png';
import ContainerCarChecked from '../components/ContainerCarChecked/ContainerCarChecked';

const ContainerChechOut = styled.main`
    width: 100vw;
    height: 100%;
    font-family: var(--font);
`;

const TitleRegister = styled.div`
    width: 100%;
    height: 6vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3vw;

    h2{
        font-size: 2.5vw;
        color: var(--dark-blue);
    }

    img{
        width: 4vw;
        margin-left: 2vw;
    }
`;

const ConfirmAll = styled.div`
    width: 100%;
    height: 8vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 3vw;
    margin-top: 3vw;

    h5{
        font-size: 1.3vw;
        color: red;
        margin-bottom: 1vw;
    }

    button{
        width: 14vw;
        height: 4.2vw;
        background-color: var(--dark-blue);
        color: var(--white);
        font-weight: bold;
        transition: background-color 0.5s filter 0.5s;
        cursor: pointer;

        &:disabled{
            filter: brightness(0.6);
        }

        &:enabled:hover{
            background-color: #588ec4fd;
            filter: brightness(1);
        }
    }

`;


const CheckOut = () => {

    const { setHeader, setFooter, setPagePromocoes, register, 
        confirmDados, carConfirm, car} = React.useContext(GlobalContext);


    

    React.useEffect(()=>{
        setHeader(true);
        setFooter(true);   
        setPagePromocoes(false); 
    }, [setHeader, setFooter, setPagePromocoes])

    function purchaseCompleted(){
        window.localStorage.setItem('car', JSON.stringify(car));

        alert('Muito obrigado sua compra já está armazenada junto com os dados obtidos. Ficamos muito felizes em ter você como cliente. =]')
    }

    return (
        <ContainerChechOut>

            <ContainerCentral>

            <TitleRegister>

                    
                <DivOrdemPayment>
                    1º
                </DivOrdemPayment>


                <h2>Check seus produtos para seguir com a compra.</h2>

                <img src={CheckIcon} alt={'Check Icon'} />

            </TitleRegister>


            <ContainerCarChecked />



                {!register &&
                    <>
                        <TitleRegister>

                            <DivOrdemPayment>
                                2º
                            </DivOrdemPayment>

                            <h2>Faça o Registro por favor para prosseguir.</h2>

                            <img src={IconForm} alt={'Icone Form'} />

                        </TitleRegister>

                        <FormDetailsClient />
                    </>
                }

                <TitleRegister>

                    
                    <DivOrdemPayment>
                        {!register ? '3º' : '2º'}
                    </DivOrdemPayment>
                    

                    <h2>Confirme os dados para onde irá entregar seu pedido.</h2>

                    <img src={IconForm} alt={'Icone Form'} />

                </TitleRegister>

                <FormConfirmSendProducts />

                <ConfirmAll>

                    <h5>Atenção: Esse botão só pode ser acionado após preencher todas as etapas(1,2,3).</h5>

                    <button disabled={carConfirm && register && confirmDados ? false : true}
                    onClick={purchaseCompleted}>
                        Concluir Compra
                    </button>

                </ConfirmAll>
                
            </ContainerCentral>
            
        </ContainerChechOut>
    )
}

export default CheckOut;
