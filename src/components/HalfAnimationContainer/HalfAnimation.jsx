import React from 'react';
import asaDireita from '../../assets/email/asaDireita.png';
import asaEsquerda from '../../assets/email/asaEsquerda.png';
import email from '../../assets/email/enviarSolo.png';
import efeitoLeft from '../../assets/email/efeitoBaixoEsquerdo.png';
import efeitoCenter from '../../assets/email/efeitoCentral.png';
import efeitoRight from '../../assets/email/efeitoDireitoEmail.png';
import capaEmail from '../../assets/email/cimaEmail.png';
import { ContainerAnimation, ContainerAnimationProduct,
    Animation, EmailAnimate} from './style/HalfAnimationStyle';
import Balloons from '../../assets/baloes.png';
import Promocoes from '../../assets/promocoes.png';
import BlackFriday from '../../assets/blackfriday.svg';
import { GlobalContext } from '../../context/GlobalContext';



const HalfAnimation = () => {

   const { asaTrueAndEffectTrue, setAsaTrueAndEffectTrue,
            openEnvelop, setOpenEnvelop,
            animateTextAndBalloons, setAnimateTextAndBalloons,
            animationMoreImages, setAnimationMoreImages,
            animationBlackFriday, setAnimationBlackFriday, 
            animationState, setAnimationState, TimeOut1, TimeOut2, TimeOut3, TimeOut4,
            TimeOut5, TimeOut6, TimeOutPrincipal,
           
             pagePromocoes} = React.useContext(GlobalContext);
            
    React.useEffect(()=>{
                
        if(animateTextAndBalloons){
            TimeOutPrincipal.current = setTimeout(()=>{
                setAnimateTextAndBalloons(false);
                setAnimationState(true);
                setAsaTrueAndEffectTrue(true);
            }, 10000);
        }
        
        if(asaTrueAndEffectTrue){
            clearTimeout(TimeOutPrincipal.current);
            TimeOut1.current = setTimeout(()=>{
                setAsaTrueAndEffectTrue(false);
                setOpenEnvelop(true);
            }, 3000)
        }
        if(openEnvelop){
            clearTimeout(TimeOut1.current);
            TimeOut2.current = setTimeout(()=>{
                setAnimationMoreImages(true);   
            }, 1500) 
        }
        
        if(animationMoreImages){
            clearTimeout(TimeOut2.current);
            TimeOut3.current = setTimeout(()=>{
                setOpenEnvelop(false);
                TimeOut4.current = setTimeout(()=>{
                    clearTimeout(TimeOut3.current);
                    setAnimationState(false);
                    TimeOut5.current = setTimeout(()=>{
                        clearTimeout(TimeOut4.current);
                        setAnimationMoreImages(false);
                        setAnimationBlackFriday(true);
        
                        TimeOut6.current = setTimeout(()=>{
                            clearTimeout(TimeOut5.current);
                            setAnimationBlackFriday(false);
                            setAnimateTextAndBalloons(true);
                        }, 6000);
                    }, 3000);
                }, 1000); 
            }, 1000)
        }


    }, [pagePromocoes,TimeOut1, TimeOut2, TimeOut3, TimeOut4,
        TimeOut5, TimeOut6, animateTextAndBalloons,
        asaTrueAndEffectTrue, setAnimateTextAndBalloons,
        setAnimationBlackFriday, setAnimationMoreImages,
        setAnimationState, setAsaTrueAndEffectTrue,
        setOpenEnvelop, animationMoreImages, openEnvelop, animationState, TimeOutPrincipal])

    return (
        <>
            {pagePromocoes && 
            <ContainerAnimation>

            <ContainerAnimationProduct pagepromocoes={pagePromocoes}>

                {animateTextAndBalloons &&  
                    <>
                        <h1 className={'centerText'} pagepromocoes={pagePromocoes.value}>
                            Cadastre-se já para receber Promoções por E-mail.</h1>


                        <img className={'balloons1'}  pagepromocoes={pagePromocoes.value} src={Balloons} alt={'Balão'} />
                        <img className={'balloons2'}  pagepromocoes={pagePromocoes.value} src={Balloons} alt={'Balão'} />

                        <img className={'balloons3'}  pagepromocoes={pagePromocoes.value} src={Balloons} alt={'Balão'} />


                        <img className={'balloons4'}  pagepromocoes={pagePromocoes.value} src={Balloons} alt={'Balão'} />

                        <img className={'balloons5'}  pagepromocoes={pagePromocoes.value} src={Balloons} alt={'Balão'} />


                        <img className={'balloons6'}  pagepromocoes={pagePromocoes.value} src={Balloons} alt={'Balão'} />

                        <img className={'balloons7'}  pagepromocoes={pagePromocoes.value} src={Balloons} alt={'Balão'} />

                    </>
                }


                {pagePromocoes && animationState && 
                    <Animation>



                        <EmailAnimate openenvelop={openEnvelop} asatrueandeffecttrue={asaTrueAndEffectTrue}>

                            
                            <img className={'asaLeft'} asatrueandeffecttrue={asaTrueAndEffectTrue.value} src={asaEsquerda} alt={'Asa Esquerda'} />

                            <div>
                                <img className={'capaEmail'} openenvelop={openEnvelop.value} src={capaEmail} alt={'Capa Email'} />
                                
                                <img className={'centerEmail'} src={email} alt={'Asa Esquerda'} />
                            </div>


                        
                            <img className={'asaRight'} asatrueandeffecttrue={asaTrueAndEffectTrue.value}  src={asaDireita} alt={'Asa Direita'} /> 

                            <img className={'efeitoLeft'} asatrueandeffecttrue={asaTrueAndEffectTrue.value} src={efeitoLeft} alt={'Efeito Left'} />

                            <img className={'efeitoCenter'} asatrueandeffecttrue={asaTrueAndEffectTrue.value} src={efeitoCenter} alt={'Efeito Center'} />

                            <img className={'efeitoRight'} asatrueandeffecttrue={asaTrueAndEffectTrue.value} src={efeitoRight} alt={'Efeito Right'} />

                        </EmailAnimate>





                    </Animation>
                }

                {pagePromocoes && animationMoreImages &&
                    <img className={'promocoes'} animationmoreimages={animationMoreImages.value} src={Promocoes} alt={'Promoções'} />
                }


                {pagePromocoes && animationBlackFriday && 
                    <img className={'blackfriday'} src={BlackFriday} alt={'BlackFriday'} />
                }


            </ContainerAnimationProduct>

            
        </ContainerAnimation>}
    </>
    )
}

export default HalfAnimation;
