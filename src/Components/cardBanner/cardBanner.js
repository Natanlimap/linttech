import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardBanner.css'
import { Row, Col, InputGroup, Button, FormControl } from 'react-bootstrap';

const ButtonMargin = {
    marginLeft: "2px",
    backgroundColor: "#16d17e",
    padding: "0.7rem 1rem  0.7rem 1rem" ,
    marginTop: "-0.3rem",
    color: "#005b1b",
    fontSize: "12px",
    fontWeight: "bold",
    textTransform: " uppercase",
    marginBottom: "0px",
}



class CardBanner extends Component {
    render() {
        return (
            <div>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <div className="MainTitle">
                            <p>A sua transição para <strong>o digital</strong></p>
                        </div>
                    </Col>
                </Row>
                <div className="banner-bottom">
                    <div className = "bottom-itens">
                        <p>Cadastre-se agora para receber materiais gratuitos</p>
                        <form>
                            <input placeholder="Digite o seu melhor email" type="email"></input>
                            <Button style={ButtonMargin} variant="primary">Inscreva-se</Button>{' '}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardBanner