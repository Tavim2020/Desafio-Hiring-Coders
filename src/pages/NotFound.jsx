import React from 'react';
import { GlobalContext } from '../context/GlobalContext';

const NotFound = () => {

    const { setHeader, setFooter, setPagePromocoes } = React.useContext(GlobalContext);

    React.useEffect(()=>{
        setHeader(false);
        setFooter(false);  
        setPagePromocoes(false); 
    }, [setHeader, setFooter, setPagePromocoes])
    
    window.addEventListener('load', ()=>{
        setTimeout(()=>{
            window.location.href = '/';
        }, 2500)
    })

    return (
        <div style={{ width: '100vw', height: '100vh', 
        display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h1>

                Você entrou na página errada. Você será redirecionado para página home.
                
            </h1>
        </div>
    )
}

export default NotFound;
