import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardBanner.css'
import { Card, Row, Col, InputGroup, Button, FormControl } from 'react-bootstrap';
const marginBanner = {
    marginTop: "13rem"
}
const Title = {
    color: "white",
}
const ButtonMargin = {
    marginLeft: "2px",
    backgroundColor: "#16d17e",
    color: "#005b1b",
    fontSize: "12px",
    fontWeight: "bold",
    textTransform:" uppercase",
}
class CardBanner extends Component {
    render() {
        return (
            <div>
                <Row className="justify-content-md-center" style={marginBanner}>
                    <Col md="auto" style={Title}>
                        <div className="MainTitle">
                            <p>aprenda a fazer <strong>6 em 7</strong></p>
                        </div>
                    </Col>
                </Row>
                <Row style={marginBanner}>
                    <Col md={{span: 4, offset: 2}}> <h5>Receba conteudos exclusivo por email grátis</h5></Col>
                    <Col md={{ span: 3, offset: 1}}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Digite seu melhor email"
                                aria-label="Digite seu melhor email"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button style = {ButtonMargin} variant="success" size = "sm">Inscreva-se</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default CardBanner