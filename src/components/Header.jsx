import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from '../assets/logo.png';


const Header = () => {
    return (
        <header>
            <Container>
                <Row className="align-items-baseline justify-content-around py-1">
                    <Col lg="2" className="p-0">
                        <img className="img-fluid" src={logo} alt="Simone Lobo" />
                    </Col>

                    <Col lg="7" className="p-0 d-flex justify-content-end">
                        <nav className="menu">
                            <ul className="d-flex">
                                <li className="mr-lg-5"><a href="">ínicio</a></li>
                                <li className="mr-lg-5"><a href="">Terapias</a></li>
                                <li className="mr-lg-5"><a href="">Formação</a></li>
                                <li className="mr-lg-5"><a href="">Blog</a></li>
                                <li><a href="">Contato</a></li>
                            </ul>
                        </nav>
                    </Col>

                </Row>
            </Container>
        </header>
    )
};

export default Header;