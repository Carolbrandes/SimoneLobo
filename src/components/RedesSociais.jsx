import React from 'react';
import { FaInstagram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

const RedesSociais = (props) => {
    return (
        <>
            <a className="mr-3" href="https://www.google.com.br/" target="_blank" rel="noreferrer  noopener" >
                <FaInstagram className="hover-redes-sociais" size={35} color={props.color} />
            </a>
            <a className="mr-3" href="https://www.google.com.br/" target="_blank" rel="noreferrer  noopener" >
                <FaFacebookSquare className="hover-redes-sociais" size={35} color={props.color} />
            </a>
            <a href="https://www.google.com.br/" target="_blank" rel="noreferrer  noopener" >
                <FaLinkedin className="hover-redes-sociais" size={35} color={props.color} />
            </a>
        </>
    )
}

export default RedesSociais;
