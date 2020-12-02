import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsApp from '../components/WhatsApp';
import '../styles/css/Terapias.css';

const Terapias = (props) => {
    const url = props.match.params.id;
    const terapia = {};

    switch (url) {
        case "terapia-cognitiva-comportamental":
            terapia.titulo = "Terapia cognitiva Comportamental";
            terapia.definicao = "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ligula eu quam vestibulum iaculis. Praesent sodales viverra risus, id sagittis lectus interdum a. Vivamus vitae vulputate nulla. Donec auctor lectus vel arcu bibendum ullamcorper vitae in felis. Ut quis pretium neque, at viverra odio. Pellentesque odio ex, volutpat vitae sodales tincidunt, lobortis at libero. Aenean nulla orci, venenatis quis lorem quis, gravida tincidunt metus. Sed vel mauris id dolor elementum ornare non id velit. Suspendisse potenti. Proin scelerisque lacus mauris, eget cursus magna interdum et. Aliquam in ipsum venenatis, aliquet tortor eu, blandit nunc. Nunc in ligula sed magna mattis eleifend a eu nunc.";
            terapia.funcionamento = "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ligula eu quam vestibulum iaculis. Praesent sodales viverra risus, id sagittis lectus interdum a. Vivamus vitae vulputate nulla. Donec auctor lectus vel arcu bibendum ullamcorper vitae in felis. Ut quis pretium neque, at viverra odio. Pellentesque odio ex, volutpat vitae sodales tincidunt, lobortis at libero. Aenean nulla orci, venenatis quis lorem quis, gravida tincidunt metus. Sed vel mauris id dolor elementum ornare non id velit. Suspendisse potenti. Proin scelerisque lacus mauris, eget cursus magna interdum et. Aliquam in ipsum venenatis, aliquet tortor eu, blandit nunc. Nunc in ligula sed magna mattis eleifend a eu nunc. "
            break;

        case "terapia-dos-esquemas":
            terapia.titulo = "Terapia dos Esquemas";
            terapia.definicao = "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ligula eu quam vestibulum iaculis. Praesent sodales viverra risus, id sagittis lectus interdum a. Vivamus vitae vulputate nulla. Donec auctor lectus vel arcu bibendum ullamcorper vitae in felis. Ut quis pretium neque, at viverra odio. Pellentesque odio ex, volutpat vitae sodales tincidunt, lobortis at libero. Aenean nulla orci, venenatis quis lorem quis, gravida tincidunt metus. Sed vel mauris id dolor elementum ornare non id velit. Suspendisse potenti. Proin scelerisque lacus mauris, eget cursus magna interdum et. Aliquam in ipsum venenatis, aliquet tortor eu, blandit nunc. Nunc in ligula sed magna mattis eleifend a eu nunc.";
            terapia.funcionamento = "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ligula eu quam vestibulum iaculis. Praesent sodales viverra risus, id sagittis lectus interdum a. Vivamus vitae vulputate nulla. Donec auctor lectus vel arcu bibendum ullamcorper vitae in felis. Ut quis pretium neque, at viverra odio. Pellentesque odio ex, volutpat vitae sodales tincidunt, lobortis at libero. Aenean nulla orci, venenatis quis lorem quis, gravida tincidunt metus. Sed vel mauris id dolor elementum ornare non id velit. Suspendisse potenti. Proin scelerisque lacus mauris, eget cursus magna interdum et. Aliquam in ipsum venenatis, aliquet tortor eu, blandit nunc. Nunc in ligula sed magna mattis eleifend a eu nunc. "
            break;

        default:
            break;
    }
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Col lg="8" className="mx-auto mb-5">
                        <h1 className="titulo01">{terapia.titulo}</h1>
                    </Col>

                    <section className="border-bottom">
                        <h2 className="titulo02 center mb-4">O que é?</h2>

                        <Col lg="8" className="mx-auto">
                            <p>{terapia.definicao}</p>
                        </Col>

                    </section>

                    <section>
                        <h2 className="titulo02 center mb-4">Como funciona?</h2>

                        <Col lg="8"  className="mx-auto">
                            <p>{terapia.funcionamento}</p>
                        </Col>

                    </section>

                </Container>
            </main>
            <Footer />

            <WhatsApp />

        </>
    )
}

export default Terapias;
