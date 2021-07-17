import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';
import ContainerCentral from '../Container/ContainerCentral';

const ContainerProducts = styled.section`
    width: 100vw;
    height: 100%;
    font-family: var(--font);
    margin-bottom: 7vw;

    @media(max-width: 960px){
        margin-bottom: 10vw;
    }
`;

const DivProdutos = styled.div`
    margin: 0 auto;
    width: 15vw;
    display: flex;
    margin-top: 4vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    
    border-bottom: 0.08vw solid var(--dark-blue);

    .containerImage{
        margin: 0 auto;
        width: 90%;
        height: 12vw;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2vw;
        img{    
            width: 13vw;
            height: 12vw;
            object-fit: contain;
        }
    }

    .description{
        h3{
            font-size: 1.2vw;
            text-align: center;
            color: var(--dark-blue);
            overflow: hidden;  
            width: 100%;
            text-overflow: ellipsis ellipsis;
            height: 3vw;
        }
        div{
            p{
                margin: 0 auto;
                text-align: center;
            }
            p:nth-child(1){
                margin-top: 1vw;
                font-size: 1.2vw;
                color: var(--dark-blue);
                margin-bottom: 0.3vw;
            }
            p:nth-child(2){
                color: var(--dark-blue);
                font-size: 1.1vw;

                span{
                    font-weight:  bold;
                }
            }
        }
    }

    button{
        margin: 0 auto;
        width: 11vw;
        height: 3.5vw;
        background-color: var(--dark-blue);
        transition: background-color 0.5s;
        font-size: 1.1vw;
        color: var(--white);
        margin-top: 2vw;
        cursor: pointer;

        &:hover{
            background-color: #588ec4fd;
        }
    }


    @media(max-width: 960px){
        margin: 0 auto;
        width: 38vw;
        margin-top: 5vw;
        
        border-bottom: 0.16vw solid var(--dark-blue);

        .containerImage{
            height: 30vw;
            margin-bottom: 3vw;
            img{    
                width: 27vw;
                height: 27vw;
            }
        }

        .description{
            h3{
                font-size: 2.7vw;
                height: 7.05vw;
            }
            div{
                
                p:nth-child(1){
                    margin-top: 2vw;
                    font-size: 2.6vw;
                    margin-bottom: 0.6vw;
                }
                p:nth-child(2){
                    font-size: 2.3vw;
                }
            }
        }

        button{
            width: 23vw;
            height: 7vw;
            font-size: 2.1vw;
            margin-top: 4vw;
        }
    }
`;


const Products = () => {

    const { header, footer, stateMobile} = React.useContext(GlobalContext);
    
    const [responseFetch, setResponseFetch] = React.useState(null);

    
    async function FetchTrue(){
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setResponseFetch(data);
    }

    React.useEffect(()=>{
        if(header && footer){
            FetchTrue();
        }
        

    }, [header, footer])
    
 

    return (
        <ContainerProducts>

            <ContainerCentral
            display={'grid'}
            gridTemplateColumns={stateMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'}
            >

                {responseFetch && 
                    responseFetch.map((produto) => 
                        <DivProdutos key={produto.id}>

                            <div className={'containerImage'}>

                                <img src={produto.image} alt={produto.title} />

                            </div>

                            <div className={'description'}>

                                <h3>{produto.title}</h3>

                                <div>

                                    <p>Categoria: {produto.category}</p>

                                    <p>Preço: R$<span>{produto.price.toFixed(2)}</span> </p>

                                </div>

                            </div>

                            <button>
                                Buy
                            </button>

                        </DivProdutos>
                    )
                }

            </ContainerCentral>
            
        </ContainerProducts>
    )
}

export default Products;
