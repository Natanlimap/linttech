import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './socialBanner.css'
import { Image, Row, Col } from 'react-bootstrap';

const image = {
    width: "8rem",
    height: "8rem",
}

class SocialBanner extends Component {
    render() {
        return (
            <div className="RedeSocial">
                <h2>Conecte-se <strong>agora</strong></h2>
                <div id="itens">

                    <Row >
                        <Col md={4}></Col>
                        <div id="SocialMedia">
                            <Col md={{ span: 4, offset: 8 }}>
                                <Image style={image} src="html.png" roundedCircle />
                                <small id="socialdesc">Acompanhe meus bastidores, aulas curtas e fotos photoshapadas</small>
                            </Col>
                        </div>
                        <div id="SocialMedia">
                            <Col md={{ span: 4, offset: 2 }}>
                                <Image style={image} src="html.png" roundedCircle />
                                <small id="socialdesc">Acompanhe meus bastidores, aulas curtas e fotos photoshapadas</small>
                            </Col>
                        </div>

                    </Row>
                    <div id="ShortSpace"></div>
                    <Row >
                        <Col md={4}></Col>
                        <div id="SocialMedia">
                            <Col md={{ span: 4, offset: 8 }}>
                                <Image style={image} src="html.png" roundedCircle />
                                <small id="socialdesc">Acompanhe meus bastidores, aulas curtas e fotos photoshapadas</small>
                            </Col>
                        </div>
                        <div id="SocialMedia">
                            <Col md={{ span: 4, offset: 2 }}>
                                <Image style={image} src="html.png" roundedCircle />
                                <small id="socialdesc">Acompanhe meus bastidores, aulas curtas e fotos photoshapadas</small>
                            </Col>
                        </div>

                    </Row>
                </div>
            </div>
        )
    }
}
export default SocialBanner