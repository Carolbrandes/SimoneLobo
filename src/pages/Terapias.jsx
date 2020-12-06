import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsApp from '../components/WhatsApp';
import iconeTCC from '../assets/head-snowflake.svg';
import iconeTDE from '../assets/TDE.svg';
import '../styles/css/Terapias.css';

const Terapias = () => {
    const url = window.location.pathname;
    console.log(url);

    const conteudo = (url) => {
        switch (url) {
            case "/terapias/terapia-cognitiva-comportamental":
                return {
                    icone: iconeTCC,
                    titulo: "Terapia cognitiva Comportamental",
                    definicao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ligula eu quam vestibulum iaculis. Praesent sodales viverra risus, id sagittis lectus interdum a. Vivamus vitae vulputate nulla. Donec auctor lectus vel arcu bibendum ullamcorper vitae in felis. Ut quis pretium neque, at viverra odio. Pellentesque odio ex, volutpat vitae sodales tincidunt, lobortis at libero. Aenean nulla orci, venenatis quis lorem quis, gravida tincidunt metus. Sed vel mauris id dolor elementum ornare non id velit. Suspendisse potenti. Proin scelerisque lacus mauris, eget cursus magna interdum et. Aliquam in ipsum venenatis, aliquet tortor eu, blandit nunc. Nunc in ligula sed magna mattis eleifend a eu nunc.",
                    tecnica: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ligula eu quam vestibulum iaculis. Praesent sodales viverra risus, id sagittis lectus interdum a. Vivamus vitae vulputate nulla. Donec auctor lectus vel arcu bibendum ullamcorper vitae in felis. Ut quis pretium neque, at viverra odio. Pellentesque odio ex, volutpat vitae sodales tincidunt, lobortis at libero. Aenean nulla orci, venenatis quis lorem quis, gravida tincidunt metus. Sed vel mauris id dolor elementum ornare non id velit. Suspendisse potenti. Proin scelerisque lacus mauris, eget cursus magna interdum et. Aliquam in ipsum venenatis, aliquet tortor eu, blandit nunc. Nunc in ligula sed magna mattis eleifend a eu nunc.",
                    objetivo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ligula eu quam vestibulum iaculis. Praesent sodales viverra risus, id sagittis lectus interdum a. Vivamus vitae vulputate nulla. Donec auctor lectus vel arcu bibendum ullamcorper vitae in felis. Ut quis pretium neque, at viverra odio. Pellentesque odio ex, volutpat vitae sodales tincidunt, lobortis at libero. Aenean nulla orci, venenatis quis lorem quis, gravida tincidunt metus. Sed vel mauris id dolor elementum ornare non id velit. Suspendisse potenti. Proin scelerisque lacus mauris, eget cursus magna interdum et. Aliquam in ipsum venenatis, aliquet tortor eu, blandit nunc. Nunc in ligula sed magna mattis eleifend a eu nunc."
                }

                break;

            case "/terapias/terapia-dos-esquemas":
                return {
                    icone: iconeTDE,
                    titulo: "Terapia dos Esquemas",
                    definicao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ligula eu quam vestibulum iaculis. Praesent sodales viverra risus, id sagittis lectus interdum a. Vivamus vitae vulputate nulla. Donec auctor lectus vel arcu bibendum ullamcorper vitae in felis. Ut quis pretium neque, at viverra odio. Pellentesque odio ex, volutpat vitae sodales tincidunt, lobortis at libero. Aenean nulla orci, venenatis quis lorem quis, gravida tincidunt metus. Sed vel mauris id dolor elementum ornare non id velit. Suspendisse potenti. Proin scelerisque lacus mauris, eget cursus magna interdum et. Aliquam in ipsum venenatis, aliquet tortor eu, blandit nunc. Nunc in ligula sed magna mattis eleifend a eu nunc.",
                    tecnica: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ligula eu quam vestibulum iaculis. Praesent sodales viverra risus, id sagittis lectus interdum a. Vivamus vitae vulputate nulla. Donec auctor lectus vel arcu bibendum ullamcorper vitae in felis. Ut quis pretium neque, at viverra odio. Pellentesque odio ex, volutpat vitae sodales tincidunt, lobortis at libero. Aenean nulla orci, venenatis quis lorem quis, gravida tincidunt metus. Sed vel mauris id dolor elementum ornare non id velit. Suspendisse potenti. Proin scelerisque lacus mauris, eget cursus magna interdum et. Aliquam in ipsum venenatis, aliquet tortor eu, blandit nunc. Nunc in ligula sed magna mattis eleifend a eu nunc.",
                    objetivo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ligula eu quam vestibulum iaculis. Praesent sodales viverra risus, id sagittis lectus interdum a. Vivamus vitae vulputate nulla. Donec auctor lectus vel arcu bibendum ullamcorper vitae in felis. Ut quis pretium neque, at viverra odio. Pellentesque odio ex, volutpat vitae sodales tincidunt, lobortis at libero. Aenean nulla orci, venenatis quis lorem quis, gravida tincidunt metus. Sed vel mauris id dolor elementum ornare non id velit. Suspendisse potenti. Proin scelerisque lacus mauris, eget cursus magna interdum et. Aliquam in ipsum venenatis, aliquet tortor eu, blandit nunc. Nunc in ligula sed magna mattis eleifend a eu nunc."
                }
                break;
        }
    }

    const terapia = conteudo(url);

    if (terapia) {
        return (
            <>
                <Header />
                <main>
                    <Container>

                        <Row className="justify-content-center">
                            <Col lg="6" className="mb-5">
                                <img src={terapia.icone} alt={terapia.titulo} className="img-fluid mb-3 d-block mx-auto" />

                                <h1 className="titulo01 text-center">{terapia.titulo}</h1>
                            </Col>

                            <div className="w-100"></div>

                            <Col lg="6" className="d-flex flex-column align-items-center border-bottom">
                                <h2 className="titulo02 center mb-4">Definição</h2>

                                <Col lg="10">
                                    <p>{terapia.definicao}</p>
                                </Col>
                            </Col>

                            <Col lg="6" className="d-flex flex-column align-items-center border-bottom">
                                <h2 className="titulo02 center mb-4">Técnica</h2>

                                <Col lg="10">
                                    <p>{terapia.tecnica}</p>
                                </Col>
                            </Col>

                            <Col lg="11" className="d-flex flex-column align-items-center mt-5">
                                <h2 className="titulo02 center mb-4">Objetivo</h2>

                                <Col lg="12">
                                    <p>{terapia.objetivo}</p>
                                </Col>
                            </Col>
                        </Row>

                    </Container>
                </main>
                <Footer />

                <WhatsApp />

            </>
        )
    } else {
        return null;
    }

}

export default Terapias;
