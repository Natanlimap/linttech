import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

import { Row, Col } from 'react-bootstrap';

class MyFooter extends Component {
    render() {
        return (
            <div className="FooterSection">
                <Row className="justify-content-md-center" id="FooterSpace">
                    <Col md={{ span: 3 }}>
                        <h2>Natan de Lima</h2>

                        <p>Estudante de Tecnologia da Informação, pela UFRN, com foco na área de gestão de TI e Desenvolvimento de Software. Co-Fundador da Linttech, uma startup com propósito de transformar microempreendedores e pequenas empresas com uso de tecnologias inovadoras</p>
                    </Col>
                    <Col md={{ span: 1 }}></Col>
                    <Col md={{ span: 3 }}>
                        <h2>Victor Rennan</h2>
                        <p>Formado em administração de empresas, possui vários projetos de sucesso na internet como Blueberry, Aprenda Piano e o treinamento Conversão Extrema. Foi premiado como o melhor profissional de Google Ads do país pelo Afiliados Brasil em 2015 e 2016. Tiago tem como missão ajudar pessoas comuns a alcançar a mais alta performance dos seus projetos e negócios através da internet.</p>
                    </Col>

                </Row>
            </div>

        )
    }
}
export default MyFooter