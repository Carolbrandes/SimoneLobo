import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className="justify-content-lg-around  align-items-center py-3 py-lg-0">
                    <Col xs="7" lg="8" className="p-0 mb-4 mb-lg-0 ml-3 ml-lg-0">
                        <p className="p-0 m-0">
                            <a className="d-block d-lg-inline-block" href="" target="_blank">
                                <FaMapMarkerAlt size={30} />
                                <span className="d-inline-block ml-lg-2 mr-lg-4 endereco-position-mobile"> Av das Américas 12.300 - Sala 233 - Recreio dos Bandeirantes</span>
                            </a>


                            <a className="d-block d-lg-inline-block whatsapp-position-mobile" href="" target="_blank">
                                <FaWhatsapp size={30} />
                                <span className="d-inline-block ml-2">
                                    (21) 97979-7989
                                        </span>
                            </a>
                        </p>
                    </Col>



                    <Col xs="7" lg="2" className="p-0 d-flex justify-content-lg-end ml-3 ml-lg-0">
                        <p className="p-0 m-0">
                            <a className="mr-3" href="" target="_blank">
                                <FaInstagram className="hover-redes-sociais" size={35} color="#fff" />
                            </a>
                            <a className="mr-3" href="" target="_blank">
                                <FaFacebookSquare className="hover-redes-sociais" size={35} color="#fff" />
                            </a>
                            <a href="" target="_blank">
                                <FaLinkedin className="hover-redes-sociais" size={35} color="#fff" />
                            </a>

                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;