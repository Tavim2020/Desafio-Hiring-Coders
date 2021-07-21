import React from 'react';
import {ContainerProducts, DivProdutos} from './style/ProductsStyle';
import { GlobalContext } from '../../context/GlobalContext';
import ContainerCentral from '../Container/ContainerCentral';




const Products = () => {

    const { header, footer, stateMobile, car, 
        countCompras, setCountCompras} = React.useContext(GlobalContext);
    
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

    function moveToCar(event){
        const id = Number(event.target.id);
        car.push(responseFetch[id]);
        setCountCompras(countCompras + 1);
    }
    
 

    return (
        <ContainerProducts>

            <ContainerCentral
            display={'grid'}
            gridTemplateColumns={stateMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'}
            >

                {responseFetch && 
                    responseFetch.map((produto, index) => 
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

                            <button onClick={moveToCar} id={index}>
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
