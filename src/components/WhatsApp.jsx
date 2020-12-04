import React from 'react';
import iconeWhatsApp from '../assets/whatsapp.svg';

const WhatsApp = () => {
    return (
        <a className="whatsApp-link" href="https://www.google.com.br/" target="_blank"  rel="noreferrer  noopener" >
            <img src={iconeWhatsApp} alt="WhatsApp" />
        </a>
    )

}

export default WhatsApp;