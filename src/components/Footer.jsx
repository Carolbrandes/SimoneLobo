import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {  FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import RedesSocias from './RedesSociais';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className="justify-content-lg-around  align-items-center py-3 py-lg-0">
                    <Col xs="7" lg="8" className="p-0 mb-4 mb-lg-0 ml-3 ml-lg-0">
                        <p className="p-0 m-0">
                            <a className="d-block d-lg-inline-block" href="https://www.google.com.br/" target="_blank"  rel="noreferrer  noopener" >
                                <FaMapMarkerAlt size={30} />
                                <span className="d-inline-block ml-lg-2 mr-lg-4 endereco-position-mobile"> Av das Américas 12.300 - Sala 233 - Recreio dos Bandeirantes</span>
                            </a>


                            <a className="d-block d-lg-inline-block whatsapp-position-mobile" href="https://www.google.com.br/" target="_blank"  rel="noreferrer  noopener" >
                                <FaWhatsapp size={30} />
                                <span className="d-inline-block ml-2">
                                    (21) 97979-7989
                                        </span>
                            </a>
                        </p>
                    </Col>

                    <Col xs="7" lg="2" className="p-0 d-flex justify-content-lg-end ml-3 ml-lg-0">
                       <RedesSocias color="#fff" />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;