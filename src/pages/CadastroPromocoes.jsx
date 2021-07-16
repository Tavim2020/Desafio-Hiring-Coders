import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalContext';
import HalfAnimation from '../components/HalfAnimationContainer/HalfAnimation';
import FormCadastroEmail from '../components/FormCadastroEmail/FormCadastroEmail';

const PromocoesContainer = styled.main`
    width: 100vw;
    height: 100%;
    display: flex;

    @media(max-width: 960px){
        flex-direction: column;
    }
`;



const CadastroPromocoes = () => {

    const { setHeader, setFooter, setPagePromocoes} = React.useContext(GlobalContext);

    React.useEffect(()=>{
        
            setHeader(true);
            setFooter(false);
            setPagePromocoes(true);

    }, [setFooter, setHeader, setPagePromocoes])

    return (
        <PromocoesContainer>

            <HalfAnimation />
            
                
            <FormCadastroEmail />
            
        </PromocoesContainer>
    )
}

export default CadastroPromocoes;
