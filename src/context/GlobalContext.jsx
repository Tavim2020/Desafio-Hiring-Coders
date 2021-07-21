import React from 'react';


export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {

    const [effectConfete, setEffectConfete] = React.useState(false);
    const [header, setHeader] = React.useState(true);
    const [footer, setFooter] = React.useState(true);
    const FooterContainerForScroll = React.useRef(null);


    // Animação
    const [asaTrueAndEffectTrue, setAsaTrueAndEffectTrue] = React.useState(false);
    const [openEnvelop, setOpenEnvelop ] = React.useState(false);
    const [animationState, setAnimationState] = React.useState(false);
    const [animateTextAndBalloons, setAnimateTextAndBalloons] = React.useState(false); 
    const [animationMoreImages, setAnimationMoreImages] = React.useState(false);
    const [animationBlackFriday, setAnimationBlackFriday] = React.useState(false);

    // setTimeOutActive
    const TimeOut1 = React.useRef(null);
    const TimeOut2 = React.useRef(null);
    const TimeOut3 = React.useRef(null);
    const TimeOut4 = React.useRef(null);
    const TimeOut5 = React.useRef(null);
    const TimeOut6 = React.useRef(null);
    const TimeOutPrincipal = React.useRef(null);


    // Mobile
    const [stateMobile, setStateMobile] = React.useState(false);

    // Menu
    const [stateMenuFlutuante, setStateMenuFlutuante] = React.useState(true);

    // Page Promoções
    const [pagePromocoes, setPagePromocoes] = React.useState(false);

    // Car
    const [car, setCar] = React.useState([]);
    const [countCompras, setCountCompras] = React.useState(0);


    // Usuário Registro
    const [nameUser, setNameUser] = React.useState('');
    const [sobreNameUser, setSobreNameUser] = React.useState('');
    const [telefoneUser, setTelefoneUser] = React.useState('');
    const [emailUser, setEmailUser] = React.useState('');
    const [enderecoUser, setEnderecoUser] = React.useState('');
    const [bairroUser, setBairroUser] = React.useState('');
    const [complementoUser, setComplementoUser] = React.useState('');
    const [referenciaUser, setReferenciaUser] = React.useState('');
    const [cidadeUser, setCidadeUser] = React.useState('');
    const [estadoUser, setEstadoUser] = React.useState('');
    const [cepUser, setCepUser] = React.useState('');
    const [cpfUser, setCpfUser] = React.useState('');
    const [rgUser, setRgUser] = React.useState('');

    // Registro
    const [register, setRegister] = React.useState(false);

    // CheckOut
    const [confirmDados, setConfirmDados] = React.useState(false);
    const [carConfirm, setCarConfirm] = React.useState(false);



    React.useEffect(()=>{
        window.addEventListener('resize',()=>{
            if(window.screen.width <= 960){
                setStateMobile(true);
            }
            else{
                setStateMobile(false);
            }
        })

        if(window.screen.width <= 960){
            setStateMobile(true);
        }
        else{
            setStateMobile(false);
        }
    }, [stateMobile, setStateMobile])


    React.useEffect(()=>{
        if(pagePromocoes){
            setAnimateTextAndBalloons(true);
        }
        else if(!pagePromocoes){
            if(TimeOutPrincipal.current){
                clearTimeout(TimeOutPrincipal.current);
            }
            if(TimeOut1.current){
                clearTimeout(TimeOut1.current);
            }
            if(TimeOut2.current){
                clearTimeout(TimeOut2.current);

            }
            if(TimeOut3.current){
                clearTimeout(TimeOut3.current);
    
            }
            if(TimeOut4.current){
                clearTimeout(TimeOut4.current);

            }
            if(TimeOut5.current){
                clearTimeout(TimeOut5.current);

            }
            if(TimeOut6.current){
                clearTimeout(TimeOut6.current);

            }
            setAsaTrueAndEffectTrue(false);
            setOpenEnvelop(false);
            setAnimateTextAndBalloons(false);
            setAnimationMoreImages(false);
            setAnimationBlackFriday(false);
            setAnimationState(false);
        }
            
    }, [pagePromocoes])


    

    return (
        <GlobalContext.Provider value={{
            effectConfete, 
            setEffectConfete,
            header, 
            setHeader,
            footer, 
            setFooter,
            asaTrueAndEffectTrue, 
            setAsaTrueAndEffectTrue,
            openEnvelop, 
            setOpenEnvelop,
            animateTextAndBalloons, 
            setAnimateTextAndBalloons,
            animationMoreImages, 
            setAnimationMoreImages,
            animationBlackFriday, 
            setAnimationBlackFriday,
            animationState, 
            setAnimationState,
            stateMobile, 
            setStateMobile,
            stateMenuFlutuante, 
            setStateMenuFlutuante,
            pagePromocoes, 
            setPagePromocoes,
            TimeOut1,
            TimeOut2,
            TimeOut3,
            TimeOut4,
            TimeOut5,
            TimeOut6,
            TimeOutPrincipal,
            FooterContainerForScroll,
            car, 
            setCar,
            countCompras, 
            setCountCompras,
            nameUser, setNameUser,
            sobreNameUser, 
            setSobreNameUser,
            telefoneUser, 
            setTelefoneUser,
            emailUser, 
            setEmailUser,
            enderecoUser, 
            setEnderecoUser,
            bairroUser, 
            setBairroUser,
            complementoUser, 
            setComplementoUser,
            referenciaUser, 
            setReferenciaUser,
            cidadeUser, 
            setCidadeUser,
            estadoUser,
            setEstadoUser,
            cepUser, 
            setCepUser,
            cpfUser, 
            setCpfUser,
            rgUser, 
            setRgUser,
            register, 
            setRegister,
            confirmDados, 
            setConfirmDados,
            carConfirm, 
            setCarConfirm,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}