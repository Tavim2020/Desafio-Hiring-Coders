import React from 'react';
import styled from 'styled-components';
import BlackFriday from '../components/Container/BlackFriday';
import MenuFlutuante from '../components/MenuFlutuanteCadastroPromoções/MenuFlutuante';
import Products from '../components/Products/Products';
import { GlobalContext } from '../context/GlobalContext';

const HomeContainer = styled.main`
    width: 100vw;
    height: 100%;
`;


const Home = () => {


    const { setHeader, setFooter, setPagePromocoes} = React.useContext(GlobalContext);

    React.useEffect(()=>{
        setHeader(true);
        setFooter(true);   
        setPagePromocoes(false); 
    }, [setHeader, setFooter, setPagePromocoes])

    return (
        <HomeContainer>

            <BlackFriday />


            <Products />
            
            <MenuFlutuante />
            
        </HomeContainer>
    )
}

export default Home;
