import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import iconeTCC from '../assets/head-snowflake.svg';
import iconeTDE from '../assets/TDE.svg';
import Carousel from '../components/Carousel';
import WhatsApp from '../components/WhatsApp';
import '../styles/css/Home.css';


const Home = () => {
        const conteudoTerapias = [
                <div className="d-flex flex-column align-items-center">
                        <Col xs="4" xl="5">
                                <img className="img-fluid mb-3" src={iconeTCC} alt="Terapia Cognitiva Comportamental" />
                        </Col>

                        <h3 className="titulo02  text-center">Terapia Cognitiva Comportamental</h3>

                        <p className="mb-xl-5 mb-3 text-center p-3">
                                É a forma como cada pessoa vê, sente e pensa com relação à uma situação que causa desconforto, dor, incômodo, tristeza ou qualquer outra sensação negativa.
                        </p>

                        <a className="button01" href="d-block">
                                Saiba Mais
                        </a>
                </div>,

                <div className="d-flex flex-column align-items-center">
                        <Col xs="4" xl="5">
                                <img className="img-fluid mb-3" src={iconeTDE} alt="Terapia dos Esquemas" />
                        </Col>


                        <h3 className="titulo02  text-center">Terapia dos <br /> Esquemas</h3>

                        <p className="mb-xl-5 mb-3 text-center p-3">
                                Usa-se esse método quando é identificado que uma pessoa reage impulsivamente a determinada vivência, sem ter controle sobre o que faz ou mesmo sem compreender o próprio comportamento.
                        </p>

                        <a className="button01" href="d-block">
                                Saiba Mais
                        </a>
                </div>
        ];

        return (
                <>
                        <Header />

                        <div className="home__bg01"></div>


                        <section className="home__simone">
                                <Container>
                                        <h1 className="titulo01 mt-3">Simone Lobo</h1>
                                        <Row className="justify-content-center align-items-center">

                                                <Col xs="8" lg="3" className="mb-3">
                                                        <div className="home__foto-simone"></div>
                                                </Col>

                                                <Col className="ml-4" lg="5">
                                                        <ul className="p-0 mb-5">
                                                                <li>
                                                                        Bacharel e licenciatura de psicologia pela Universidade Gama Filho.
                                                                </li>
                                                                <li>
                                                                        Certificação em Professional e Self Coach - Global Coaching Community and Brazilian coaching Institute
                                                                </li>
                                                                <li>
                                                                        Formação em terapia dos Esquemas  - Credenciada pelo New Jersey Institute for Schema Therapy Springfield, New Jersey - ISST International Society of SCHEMA THERAPY - Wainer Psicologia Positiva  - 2 turma de formação do Brasil.
                                                                </li>
                                                        </ul>

                                                        <a className="button01 mx-lg-0 mx-auto d-block" href="">
                                                                Saiba Mais
                                                        </a>
                                                </Col>

                                        </Row>
                                </Container>
                        </section>

                        <section className="home__terapias">
                                <Container>
                                        <h2 className="titulo01 mt-3">terapias</h2>

                                        <div className="d-none d-lg-block">
                                                <Row className="justify-content-center align-items-baseline mt-5">
                                                        {conteudoTerapias.map((terapia, index) => <Col key={index} lg="5">{terapia}</Col>)}
                                                </Row>
                                        </div>

                                        <div className="d-block d-lg-none carousel-terapias">
                                                <Carousel>
                                                        <div>
                                                                {conteudoTerapias[0]}
                                                        </div>

                                                        <div>
                                                                {conteudoTerapias[1]}
                                                        </div>
                                                </Carousel>
                                        </div>
                                </Container>
                        </section>

                        <section className="home__bg02">
                                <div className="bg-fundo-texto d-flex align-items-center justify-content-center">
                                        <Col xs="11" lg="5">
                                                <blockquote className="text-center">
                                                        <p>
                                                                Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana.
                                                                </p>

                                                        <cite>Carl jung</cite>
                                                </blockquote>
                                        </Col>
                                </div>
                        </section>

                        <section className="home__consultorio mb-5 mb-lg-0">
                                <Container>
                                        <h2 className="titulo01 mt-3">ambiente aconhegante</h2>

                                        <div className="carousel-fotos">
                                                <Carousel>
                                                        <div className="img-consultorio" id="img01-consultorio"></div>
                                                        <div className="img-consultorio" id="img02-consultorio"></div>
                                                        <div className="img-consultorio" id="img03-consultorio"></div>
                                                </Carousel>
                                        </div>


                                        <h3 className="titulo02 text-center mt-4">Centro Empresarial Blue Center</h3>
                                        <p className="text-center">
                                                Av das Américas 12.300 - Sala 233 <br />
                                                Recreio dos Bandeirantes <br />
                                                Rio de Janeiro RJ
                                        </p>
                                </Container>
                        </section>


                        <Footer />

                        <WhatsApp />


                </>
        )
}

export default Home;