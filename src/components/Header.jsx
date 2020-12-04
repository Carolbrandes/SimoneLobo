import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import RedesSociais from './RedesSociais';

const Header = () => {
    const [menuMobile, setMenuMobile] = React.useState(false);
    const [subMenuMobile, setSubMenuMobile] = React.useState(false);

    function exibicaoMenu() {
        setMenuMobile(!menuMobile);
        const menu = document.querySelector(".menu");
        menuMobile ? menu.style.display = "block" : menu.style.display = "none";
    }

    function exibicaoSubmenu() {
        setSubMenuMobile(!subMenuMobile);
        const submenu = document.querySelector(".submenu");
        subMenuMobile ? submenu.style.display = "block" : submenu.style.display = "none";
    }

    return (
        <header>
            <Container>
                <Row className="align-items-lg-baseline justify-content-lg-around justify-content-between align-items-center py-1">
                    <Col xs="5" lg="2" className="p-0 ml-3 ml-lg-0">
                        <img className="img-fluid" src={logo} alt="Simone Lobo" />
                    </Col>

                    <Col xs="2" className="d-block d-lg-none">
                        <span onClick={exibicaoMenu}>
                            <FaBars size={35} color="#333" />
                        </span>
                    </Col>

                    <Col lg="7" className="d-none d-lg-block p-0 d-flex justify-content-lg-end menu-wrapper">
                        <nav className="menu">
                            <ul className="d-flex flex-lg-row flex-column">
                                <li className="mr-lg-5">
                                    <Link to="/">ínicio</Link>
                                </li>
                                <li className="mr-lg-5 position-relative" onClick={exibicaoSubmenu}>Terapias

                                    <ul className="submenu mb-3 mb-xl-0">
                                        <li>
                                            <Link to="/terapias/terapia-cognitiva-comportamental">
                                                Terapia Cognitiva Comportamental
                                           </Link>
                                        </li>

                                        <li>
                                            <Link to="/terapias/terapia-dos-esquemas">
                                                Terapia dos
                                                Esquemas
                                          </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="mr-lg-5">
                                    <Link to="/formacao">
                                        Formação
                                          </Link>
                                </li>
                                <li className="mr-lg-5">
                                    <Link to="/blog">
                                        Blog
                                          </Link>

                                </li>
                                <li>
                                    <Link to="/contato">
                                        Contato
                                          </Link>
                                </li>
                            </ul>

                            <nav className="d-block d-xl-none redes-sociais">
                                <RedesSociais color="#99c73c" />
                            </nav>
                        </nav>
                    </Col>


                </Row>
            </Container>
        </header>
    )
};

export default Header;