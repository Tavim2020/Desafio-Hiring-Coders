import React from 'react';
import { FormDetailsContainer } from './style/FormsStyle'
import { GlobalContext } from '../../context/GlobalContext';



const FormDetailsClient = () => {

    const { nameUser, setNameUser,
        sobreNameUser, setSobreNameUser,
        telefoneUser, setTelefoneUser,
        emailUser, setEmailUser,
        enderecoUser, setEnderecoUser,
        bairroUser, setBairroUser,
        complementoUser, setComplementoUser,
        referenciaUser, setReferenciaUser,
        cidadeUser, setCidadeUser,
        estadoUser, setEstadoUser,
        cepUser, setCepUser,
        cpfUser, setCpfUser,
        rgUser, setRgUser,
        setRegister } = React.useContext(GlobalContext);


    function registerUser(event){
        event.preventDefault();
        window.localStorage.setItem('nameUser', `${nameUser}`);
        window.localStorage.setItem('sobreNameUser', `${sobreNameUser}`);
        window.localStorage.setItem('telefoneUser', `${telefoneUser}`);
        window.localStorage.setItem('emailUser', `${emailUser}`);
        window.localStorage.setItem('enderecoUser', `${enderecoUser}`);
        window.localStorage.setItem('bairroUser', `${bairroUser}`);
        window.localStorage.setItem('complementoUser', `${complementoUser}`);
        window.localStorage.setItem('referenciaUser', `${referenciaUser}`);
        window.localStorage.setItem('cidadeUser', `${cidadeUser}`);
        window.localStorage.setItem('estadoUser', `${estadoUser}`);
        window.localStorage.setItem('cepUser', `${cepUser}`);
        window.localStorage.setItem('cpfUser', `${cpfUser}`);
        window.localStorage.setItem('rgUser', `${rgUser}`);
        setRegister(true);
    }


    return (
            <FormDetailsContainer onSubmit={registerUser}>

                <div>

                    <label htmlFor="name">Nome*:</label>
                    <input type="text" value={nameUser} 
                    onChange={({target})=> setNameUser(target.value)} 
                    minLength={'3'} maxLength={'15'} 
                    placeholder={'Ex: Maria...'} id={'name'} required/>

                    <label htmlFor="sobrenome">Sobrenome*:</label>
                    <input type="text" value={sobreNameUser} 
                    onChange={({target}) => setSobreNameUser(target.value)} 
                    minLength={'4'} maxLength={'30'} 
                    placeholder={'Ex: Aparecida Costa...'}id={'sobrenome'} required/>

                </div>

                <div>

                    <label htmlFor="telefone">Telefone*:</label>
                    <input type="tel" value={telefoneUser.replace(/[a-z]/g, '')} 
                    pattern={'[(][0-9]{2}[)][0-9]{5}-[0-9]{4}'}
                    onChange={({target}) => setTelefoneUser(target.value)} 
                    minLength={'10'} maxLength={'14'} 
                    placeholder={'Formato Exigido: (99)9999-9999...'}id={'telefone'} required/>

                    <label htmlFor="email">E-mail*:</label>
                    <input type="email" value={emailUser} 
                    onChange={({target}) => setEmailUser(target.value)} 
                    minLength={'6'} maxLength={'45'} 
                    placeholder={'Ex: maria@email.com...'}id={'email'} required/>

                </div>


                <div>

                    <label htmlFor="endereco">Endereço*:</label>
                    <input type="text" value={enderecoUser} 
                    onChange={({target}) => setEnderecoUser(target.value)} 
                    minLength={'3'} maxLength={'40'} 
                    placeholder={'Ex: Rua Benedito Silva...'}id={'endereco'} required/>

                    <label htmlFor="bairro">Bairro*:</label>
                    <input type="text" value={bairroUser} 
                    onChange={({target}) => setBairroUser(target.value)} 
                    minLength={'2'} maxLength={'40'} 
                    placeholder={'Ex: Barão do Amazonas...'}id={'bairro'} required/>

                    <label htmlFor="complemento">Complemento*:</label>
                    <input type="text" value={complementoUser} 
                    onChange={({target})=>setComplementoUser(target.value)} 
                    minLength={'2'} maxLength={'20'} 
                    placeholder={'Ex: Apartamento...'}id={'complemento'} required/>

                </div>

                <div>

                    <label htmlFor="referencia">Referencia*:</label>
                    <input type="text" value={referenciaUser} 
                    onChange={({target})=> setReferenciaUser(target.value)} 
                    minLength={'3'} maxLength={'80'} 
                    placeholder={'Ex: Perto do mercado da rua varejista...'}id={'referencia'} required/>

                    <label htmlFor="cidade">Cidade*:</label>
                    <input type="text" value={cidadeUser} 
                    onChange={({target}) => setCidadeUser(target.value)} 
                    minLength={'3'} maxLength={'40'} 
                    placeholder={'Ex: Itú...'}id={'cidade'} required/>

                    <label htmlFor="estado">Estado*:</label>
                    <input type="text" value={estadoUser} 
                    onChange={({target}) => setEstadoUser(target.value)} 
                    minLength={'2'} maxLength={'25'} 
                    placeholder={'Ex: São Paulo...'}id={'estado'} required/>


                </div>


                <div>

                    <label htmlFor="cep">Cep*:</label>
                    <input type="text" value={cepUser.replace(/[a-z]/g, '')} 
                    pattern={'[0-9]{5}-[0-9]{3}'}
                    onChange={({target}) => setCepUser(target.value)} 
                    minLength={'9'} maxLength={'9'} 
                    placeholder={'Formato Exigido: 12345-123...'}id={'cep'} required/>

                    <label htmlFor="cpf">Cpf*:</label>
                    <input type="text" value={cpfUser.replace(/[a-z]/g, '')} 
                    pattern={'[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}'}
                    onChange={({target}) => setCpfUser(target.value)} 
                    minLength={'14'} maxLength={'14'} 
                    placeholder={'Formato Exigido: 123.123.123-12...'}id={'cpf'} required/>

                    <label htmlFor="rg">Rg*:</label>
                    <input type="text" value={rgUser.replace(/[a-z]/g, '')} 
                    pattern={'[0-9]{2}.[0-9]{3}.[0-9]{3}|[0-9]{2}.[0-9]{3}.[0-9]{3}-[0-9]' || ''}
                    onChange={({target}) => setRgUser(target.value)} 
                    minLength={'7'} maxLength={'13'} 
                    placeholder={'Formato Exigido: 12.123.123...'}id={'rg'} required/>

                </div>

                <div className={'containerButton'}>
                    <button type='submit'>
                        Enviar
                    </button>
                </div>

                <div className={'inform'}>
                    <h5>Atenção: Todos os campos com ( * ) são obrigatórios em todos os nossos formulários.</h5>
                </div>
                
            </FormDetailsContainer>
    )
}

export default FormDetailsClient;
