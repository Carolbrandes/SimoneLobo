import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className="justify-content-around align-items-center">
                    <Col lg="8" className="p-0">
                        <p className="p-0 m-0">
                            <a href="">
                                <FaMapMarkerAlt size={30} />
                                <span className="d-inline-block ml-2 mr-4"> Av das Américas 12.300 - Sala 233 - Recreio dos Bandeirantes</span>
                            </a>


                            <a href="">
                                <FaWhatsapp size={30} />
                                <span className="d-inline-block ml-2">
                                    (21) 97979-7989
                                        </span>
                            </a>
                        </p>
                    </Col>



                    <Col lg="2" className="p-0 d-flex justify-content-end">
                        <p className="p-0 m-0">
                            <a className="mr-3" href="">
                                <FaInstagram size={35} color="#fff" />
                            </a>
                            <a className="mr-3" href="">
                                <FaFacebookSquare size={35} color="#fff" />
                            </a>
                            <a href="">
                                <FaLinkedin size={35} color="#fff" />
                            </a>

                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;