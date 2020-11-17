import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';


const Header = () => {
    return (
        <header>
            <Container>
                <Row className="align-items-lg-baseline justify-content-lg-around justify-content-between align-items-center py-1">
                    <Col xs="5" lg="2"  className="p-0 ml-3 ml-lg-0">
                        <img className="img-fluid" src={logo} alt="Simone Lobo" />
                    </Col>

                    <Col xs="2" className="d-block d-lg-none">
                       <FaBars size={35} color="#333" />
                    </Col>

                    <Col lg="7" className="d-none d-lg-block p-0 d-flex justify-content-lg-end">
                        <nav className="menu">
                            <ul className="d-flex flex-lg-row flex-column">
                                <li className="mr-lg-5"><a href="">ínicio</a></li>
                                <li className="mr-lg-5">
                                    <a href="">Terapias</a>

                                    <ul className="submenu">
                                        <li>
                                            <a href="">
                                                Terapia Cognitiva Comportamental
                                            </a>
                                        </li>

                                        <li>
                                            <a href="">
                                                Terapia dos
                                                Esquemas
                                            </a>
                                        </li>
                                    </ul>
                                </li>
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