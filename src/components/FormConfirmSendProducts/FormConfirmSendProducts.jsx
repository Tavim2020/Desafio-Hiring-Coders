import React from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { FormDetailsContainer} from '../FormDetailsClient/style/FormsStyle'


const FormConfirmSendProducts = () => {


    const {setConfirmDados, register, confirmDados} = React.useContext(GlobalContext);

    const [confirmName, setConfirmName] = React.useState('');
    const [confirmSobreName, setConfirmSobreName] = React.useState('');
    const [confirmTelefone, setConfirmTelefone] = React.useState('');
    const [confirmEndereco, setConfirmEndereco] = React.useState('');
    const [confirmBairro, setConfirmBairro] = React.useState('');
    const [confirmComplemento, setConfirmComplemento] = React.useState('');
    const [confirmReferencia, setConfirmReferencia] = React.useState('');
    const [confirmCidade, setConfirmCidade] = React.useState('');
    const [confirmEstado, setConfirmEstado] = React.useState('');
    const [confirmCep, setConfirmCep] = React.useState('');


    function confirmandoDadosDeEnvio(event){
        event.preventDefault();
        if(!confirmDados){
            window.localStorage.setItem('NomeEntrega', `${confirmName}`);
            window.localStorage.setItem('SobreNomeEntrega', `${confirmSobreName}`);
            window.localStorage.setItem('TelefoneEntrega', `${confirmTelefone}`);
            window.localStorage.setItem('EnderecoEntrega', `${confirmEndereco}`);
            window.localStorage.setItem('BairroEntrega', `${confirmBairro}`);
            window.localStorage.setItem('ComplementoEntrega', `${confirmComplemento}`);
            window.localStorage.setItem('ReferenciaEntrega', `${confirmReferencia}`);
            window.localStorage.setItem('CidadeEntrega', `${confirmCidade}`);
            window.localStorage.setItem('EstadoEntrega', `${confirmEstado}`);
            window.localStorage.setItem('CepEntrega', `${confirmCep}`);
    
            setConfirmDados(true);
        }
        else{
            window.localStorage.removeItem('NomeEntrega');
            window.localStorage.removeItem('SobreNomeEntrega');
            window.localStorage.removeItem('TelefoneEntrega');
            window.localStorage.removeItem('EnderecoEntrega');
            window.localStorage.removeItem('BairroEntrega');
            window.localStorage.removeItem('ComplementoEntrega');
            window.localStorage.removeItem('ReferenciaEntrega');
            window.localStorage.removeItem('CidadeEntrega');
            window.localStorage.removeItem('EstadoEntrega');
            window.localStorage.removeItem('CepEntrega');

            setConfirmDados(false);

            setConfirmName('');
            setConfirmSobreName('');
            setConfirmTelefone('');
            setConfirmEndereco('');
            setConfirmBairro('');
            setConfirmComplemento('');
            setConfirmReferencia('')
            setConfirmCidade('');
            setConfirmEstado('')
            setConfirmCep('');
        }
    }

    const widthForm = '85%';
    const widthFirstInput = '26vw';
    const widthSecondyInput = '24.2vw';
    const widthSecondyInputTwo = '27.5vw';
    const widthThreethInput = '25.6vw';
    const widthThreethInputTwo = '24.6vw';
    const widthFourthInput = '22.7vw';
    const widthFourthInputTwo = '29.3vw';
    const widthFifthInput = '25.55vw';
    const widthFifthInputTwo = '31.3vw';

    React.useEffect(()=>{
        if(register){
            if(window.localStorage.getItem('nameUser')){
                setConfirmName(window.localStorage.getItem('nameUser'));
            };
            if(window.localStorage.getItem('sobreNameUser')){
                setConfirmSobreName(window.localStorage.getItem('sobreNameUser'));
            };
            if(window.localStorage.getItem('telefoneUser')){
                setConfirmTelefone(window.localStorage.getItem('telefoneUser'));
            };
            if(window.localStorage.getItem('enderecoUser')){
                setConfirmEndereco(window.localStorage.getItem('enderecoUser'));
            };
            if(window.localStorage.getItem('bairroUser')){
                setConfirmBairro(window.localStorage.getItem('bairroUser'));
            };
            if(window.localStorage.getItem('complementoUser')){
                setConfirmComplemento(window.localStorage.getItem('complementoUser'));
            }
            if(window.localStorage.getItem('referenciaUser')){
                setConfirmReferencia(window.localStorage.getItem('referenciaUser'));
            };
            if(window.localStorage.getItem('cidadeUser')){
                setConfirmCidade(window.localStorage.getItem('cidadeUser'));
            };
            if(window.localStorage.getItem('estadoUser')){
                setConfirmEstado(window.localStorage.getItem('estadoUser'));
            }
           if( window.localStorage.getItem('cepUser')){
               setConfirmCep( window.localStorage.getItem('cepUser'));
           }
        }
    }, [register])




    return (
        <FormDetailsContainer onSubmit={confirmandoDadosDeEnvio} 
        widthform={widthForm}
        widthfirstinput={widthFirstInput}
        widthsecondyinput={widthSecondyInput}
        widthsecondyinputtwo={widthSecondyInputTwo}
        widththreethinput={widthThreethInput}
        widththreethinputtwo={widthThreethInputTwo}
        widthfourthinput={widthFourthInput}
        widthfourthinputtwo={widthFourthInputTwo}
        widthfiftyinput={widthFifthInput}
        widthfiftyinputtwo={widthFifthInputTwo}>

                <div widthfirstinput={widthFirstInput.value}>

                    <label htmlFor="nameConfirm">Nome*:</label>
                    <input type="text" value={confirmName} 
                    onChange={({target})=> setConfirmName(target.value)} 
                    minLength={'3'} maxLength={'15'} 
                    placeholder={'Ex: Maria...'} id={'nameConfirm'} 
                    widthfirstinput={widthFirstInput.value} required/>

                    <label htmlFor="sobrenomeConfirm">Sobrenome*:</label>
                    <input type="text" value={confirmSobreName} 
                    onChange={({target}) => setConfirmSobreName(target.value)} 
                    minLength={'4'} maxLength={'30'} 
                    placeholder={'Ex: Aparecida Costa...'}id={'sobrenomeConfirm'} required
                    widthfirstinput={widthFirstInput.value}/>

                </div>

                <div widthsecondyinput={widthSecondyInput.value}
                widthsecondyinputtwo={widthSecondyInputTwo.value}>

                    <label htmlFor="telefoneConfirm">Telefone*:</label>
                    <input type="tel" value={confirmTelefone.replace(/[a-z]/g, '')} 
                    onChange={({target}) => setConfirmTelefone(target.value)} 
                    pattern={'[(][0-9]{2}[)][0-9]{5}-[0-9]{4}'}
                    minLength={'10'} maxLength={'14'} 
                    placeholder={'Formato Exigido: (99)9999-9999...'}id={'telefoneConfirm'} required
                    widthsecondyinput={widthSecondyInput.value}/>

                    <label htmlFor="enderecoConfirm">Endereço*:</label>
                    <input type="text" value={confirmEndereco} 
                    onChange={({target}) => setConfirmEndereco(target.value)} 
                    minLength={'3'} maxLength={'40'} 
                    placeholder={'Ex: Rua Benedito Silva...'}
                    widthsecondyinputtwo={widthSecondyInputTwo.value}
                    id={'enderecoConfirm'} required/>

                </div>


                <div widththreethinput={widthThreethInput.value}
                widththreethinputtwo={widthThreethInputTwo}>


                    <label htmlFor="bairroConfirm">Bairro*:</label>
                    <input type="text" value={confirmBairro} 
                    onChange={({target}) => setConfirmBairro(target.value)} 
                    minLength={'2'} maxLength={'40'} 
                    placeholder={'Ex: Barão do Amazonas...'}
                    widththreethinput={widthThreethInput.value} id={'bairroConfirm'} required/>

                    <label htmlFor="complementoConfirm">Complemento*:</label>
                    <input type="text" value={confirmComplemento} 
                    onChange={({target})=>setConfirmComplemento(target.value)} 
                    minLength={'2'} maxLength={'20'} 
                    placeholder={'Ex: Apartamento...'}
                    widththreethinputtwo={widthThreethInputTwo} id={'complementoConfirm'} required/>

                </div>


                <div widthfourthinput={widthFourthInput.value}
                widthfourthinputtwo={widthFourthInputTwo}>

                    <label htmlFor="referenciaConfirm">Referencia*:</label>
                    <input type="text" value={confirmReferencia} 
                    onChange={({target})=> setConfirmReferencia(target.value)} 
                    minLength={'3'} maxLength={'80'} 
                    placeholder={'Ex: Perto do mercado da rua varejista...'} 
                    widthfourthinput={widthFourthInput.value} id={'referenciaConfirm'} required/>

                    <label htmlFor="cidadeConfirm">Cidade*:</label>
                    <input type="text" value={confirmCidade} 
                    onChange={({target}) => setConfirmCidade(target.value)} 
                    minLength={'3'} maxLength={'40'} 
                    placeholder={'Ex: Itú...'} 
                    widthfourthinputtwo={widthFourthInputTwo} id={'cidadeConfirm'} required/>

                </div>


                <div widthfiftyinput={widthFifthInput.value}
                    widthfiftyinputtwo={widthFifthInputTwo.value}>

                    <label htmlFor="estadoConfirm">Estado*:</label>
                    <input type="text" value={confirmEstado} 
                    onChange={({target}) => setConfirmEstado(target.value)} 
                    minLength={'2'} maxLength={'25'} 
                    placeholder={'Ex: São Paulo...'} 
                    widthfiftyinput={widthFifthInput.value} id={'estadoConfirm'} required/>

                    <label htmlFor="cepConfirm">Cep*:</label>
                    <input type="text" value={confirmCep.replace(/[a-z]/g, '')} 
                    pattern={'[0-9]{5}-[0-9]{3}'}
                    onChange={({target}) => setConfirmCep(target.value)} 
                    minLength={'8'} maxLength={'8'} 
                    placeholder={'Formato Exigido: 12345-123...'} 
                    widthfiftyinputtwo={widthFifthInputTwo.value} id={'cepConfirm'} required/>

                </div>


                <div className={'containerButton'}>
                    <button type='submit'>
                        {!confirmDados ? 'Confirmar' : 'Cancelar'}
                    </button>
                </div>
            
        </FormDetailsContainer>
    )
}

export default FormConfirmSendProducts;
