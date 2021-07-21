import React from 'react';
import styled from 'styled-components';

const OrdemPayment = styled.div`
    width: 3vw;
    height: 3vw;
    background-color: var(--dark-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 2vw;
    p{
        color: var(--white);
        font-size: 2vw;
    }

    @media(max-width: 960px){
        width: 12vw;
        height: 12vw;
        margin-right: 0vw;
        p{
            font-size: 5.2vw;
        }
    }
`;

const DivOrdemPayment = ({children}) => {
    return (
        <OrdemPayment>

            <p>{children}</p>
            
        </OrdemPayment>
    )
}

export default DivOrdemPayment;
