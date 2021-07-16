import React from 'react';
import styled from 'styled-components';

const DivCentral = styled.div`
    margin: 0 auto;
    width: 87%;
    height: 100%;
`;

const ContainerCentral = ({children, display, alignItems, 
    justifyContent, gridTemplateColumns, gap}) => {
    return (
        <DivCentral 
        style={{ 
        display, 
        alignItems, 
        justifyContent,
        gridTemplateColumns,
        gap
        }}>
            {children}
        </DivCentral>
    )
}

export default ContainerCentral;