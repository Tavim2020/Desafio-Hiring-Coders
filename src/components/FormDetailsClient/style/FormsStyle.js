import styled from 'styled-components';

export const FormDetailsContainer = styled.form`
    margin: 0 auto;
    width: ${({widthform}) => widthform ? `${widthform}` : '100%'};
    height: 100%;
    margin-top: 1.5vw;

    div{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        label{
            font-size: 1.7vw;
            color: var(--dark-blue);
            font-weight: bold;
        }
        >input{
            margin-right: 1vw;
        }
        input{
            height: 3.5vw;
            padding: 1vw;
            letter-spacing: 0.05vw;
            font-size: 1.3vw;
            border-radius: 0.8vw;
            background-color: var(--clear-blue);
            margin-left: 0.4vw;
        }
        margin-bottom: 0.5vw;
    }

    div:nth-child(1){
        input{
            width: ${({widthfirstinput}) => widthfirstinput ? `${widthfirstinput}` : '36vw'};
        }
    }

    div:nth-child(2){
        input:nth-child(2){
            width: ${({widthsecondyinput}) => widthsecondyinput ? `${widthsecondyinput}` : '33.4vw'};
        }

        input:nth-child(4){
            width: ${({widthsecondyinputtwo}) => widthsecondyinputtwo ? `${widthsecondyinputtwo}` : ''};
            flex: ${({widthsecondyinputtwo}) => widthsecondyinputtwo ? '' : '1'};
        }
    }

     div:nth-child(3){
        input:nth-child(2){
            width: ${({widththreethinput}) => widththreethinput ? `${widththreethinput}` : '20vw'};
        }

        input:nth-child(4){
            width: ${({widththreethinputtwo}) => widththreethinputtwo ? `${widththreethinputtwo}` : '20vw'};
        }
        input:nth-child(6){
            width: 20vw;
        }
    }

    div:nth-child(4){
        input:nth-child(2){
            width: ${({widthfourthinput}) => widthfourthinput ? `${widthfourthinput}` : '18.75vw'};
        }

        input:nth-child(4){
            width: ${({widthfourthinputtwo}) => widthfourthinputtwo ? `${widthfourthinputtwo}` : '19.7vw'};
        }
        input:nth-child(6){
            width: 24.7vw;
        }
    }

    div:nth-child(5){
        input:nth-child(2){
            width: ${({widthfiftyinput}) => widthfiftyinput ? `${widthfiftyinput}` : '23.53vw'};
        }

        input:nth-child(4){
            width: ${({widthfiftyinputtwo}) => widthfiftyinputtwo ? `${widthfiftyinputtwo}` : '21.9vw'};
        }
        input:nth-child(6){
            flex: 1;
        }
    }

    .containerButton{
        width: 100%;
        height: 5vw;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5vw;

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
    }

    .inform{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3vw;

        h5{
            font-size: 1.2vw;
            color: red;
        }
    }
`