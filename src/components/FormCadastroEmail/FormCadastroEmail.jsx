import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.section`
    width: 50vw;
    height: 43.6vw;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 960px){
        width: 100%;
        height: 120vw;
    }
`;

const Form = styled.form`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div{
        margin: 0 auto;
        width: 90%;
        height: 8.5vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        label{
            font-size: 1.6vw;
            color: var(--dark-blue);
            font-family: var(--font);
            font-weight: bold;
            margin-bottom: 0.5vw; 
        }

        input{
            width: 70%;
            height: 3.5vw;
            border-radius: 0.8vw;
            padding: 1vw;
            font-size: 1.3vw;
            background-color: var(--clear-blue);
            font-family: var(--font);
            letter-spacing: 0.05vw;
        }

        p{
            font-size: 1vw;
            font-family: var(--font);

        }
    }

    button{
        margin: 0 auto;
        width: 10vw;
        height: 4vw;
        margin-top: 2vw;
        border-radius: 1.2vw;
        background-color: var(--dark-blue);
        color: var(--white);
        font-weight: bold;
        border: none;
        cursor: pointer;
        transition: background-color 0.5s;

        &:hover{
            background-color: #588ec4fd;
        }
    }

    @media(max-width: 960px){
        width: 80%;
        div{
            width: 90%;
            height: 27vw;
            
            label{
                font-size: 4.5vw;
                margin-bottom: 0.8vw; 
            }

            input{
                width: 90%;
                height: 12vw;
                border-radius: 1.2vw;
                padding: 3vw;
                font-size: 4.2vw;
                letter-spacing: 0.12vw;
            }

            p{
                font-size: 3.6vw;
            }
        }

        button{
            width: 27vw;
            height: 14vw;
            margin-top: 5vw;
            border-radius: 1.2vw;
        }
    }
`;

const FormCadastroEmail = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [apelido, setApelido] = React.useState('');

    function sendLocalStorage(event){
        event.preventDefault();
        if(name.length >= 3 && email.length >= 6){
            window.localStorage.setItem('name', `${name}`);
            window.localStorage.setItem('email', `${email}`);
            alert(`Olá ${name}, portador do email(${email}), já armazenamos seus dados para enviarmos as Promoções. Muito Obrigado!`);

            setName('');
            setEmail('');
        }

        if(apelido !== ''){
            window.localStorage.setItem('apelido', `${apelido}`)
            setApelido('');
        }
        window.location.href = '/';

    }

    return (
        <FormContainer>
            <Form onSubmit={sendLocalStorage}>

                <div>
                    <label htmlFor={'name'}>Primeiro Nome*:</label>
                    <input type={'text'} id={'name'} 
                    placeholder={'Name...'}  minLength={'3'} maxLength={'35'} required
                    value={name.replace(/\d|[ ]/g, '')} onChange={(event) => setName(event.target.value)}/>
                <p>Max Carcteres: {35 - name.length}</p>
                </div>

                <div>
                    <label htmlFor={'email'}>Email*:</label>
                    <input type={'email'} id={'email'} 
                    placeholder={'Email...'} maxLength={'45'} minLength={'6'} required
                    value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <p>Max Carcteres: {45 - email.length}</p>
                </div>

                <div>
                    <label htmlFor={'apelido'}>Apelido(opcional):</label>
                    <input type={'text'} id={'apelido'} 
                    placeholder={'Apelido...'} maxLength={'15'} 
                    value={apelido} onChange={(event) => setApelido(event.target.value)}/>
                    <p>Max Carcteres: {15 - apelido.length}</p>
                </div>

                <button type={'submit'}>
                    Enviar
                </button>

            </Form>
            
        </FormContainer>
    )
}

export default FormCadastroEmail;
