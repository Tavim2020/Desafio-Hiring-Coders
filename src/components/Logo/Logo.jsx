import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';

const DivLogo = styled.div`
    margin: ${({stateMobile}) => stateMobile ? '0 auto' : ''};
    width: 17vw;
    height: 5vw;
    display: flex;
    align-items: center;
    /* justify-content: center; */

    img{
        width: 13vw;
    }

    h3{
        color: #3B3D5B;
        font-size: 1.2vw;
        margin-left: 0.4vw;
        pointer-events: none;
        user-select: none;
        margin-top: 0.55vw;
        letter-spacing: 0.08vw;
        font-weight: 600;
        font-family: var(--font-neue);
    }

    @media(max-width: 960px){
        width: 35vw;
        height: 9vw;

        img{
            width: 26vw;
        }

        h3{
            font-size: 2.8vw;
            margin-left: 0.4vw;
            letter-spacing: 0.16vw;
        }
    }
`;

const Logo = () => {

    const {stateMobile} = React.useContext(GlobalContext);

    const urlImage = 'https://uploads-ssl.webflow.com/5f2d50967d364984a023dc4c/6092fbd604ec859b1408756c_logo-hc.png';

    return (
        <Link to={'/'}>
            <DivLogo stateMobile={stateMobile}>

                <img src={urlImage} alt={'Logo'} title={'Logo/ Move To Home'} />

                <h3> - VTEX</h3>

            </DivLogo>
        </Link>
    )
}

export default Logo;