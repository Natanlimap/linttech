import React, { Component } from 'react';
import './postBanner.css';
import { Button, CardDeck, Card, Row, Col } from 'react-bootstrap';
const ButtonMargin = {

    marginBottom: "0px",
}
class Postagens extends Component {
    render() {
        return (
            <div className="posts">
                <div id="Content">
                <Row>                                
                    <h2 id= "LastPost">Ultimas postagens</h2>

                    </Row>
                    <div id="recentposts">
                        <CardDeck>
                        <Row className="justify-content-md-center">                                
                            <Col md={{span:3, offset: 0}}>
                                    <Card>
                                        <Card.Img variant="top" src="./html.png" />
                                        <Card.Body>
                                            <Card.Title>Novidades do HTML5</Card.Title>
                                            <Card.Text>
                                                O que é HTML5. Surgido a partir de um consórcio entre a W3C (World Wide Web Consortium) e a WHATWG (Web Hypertext Application Technology Working ...                                </Card.Text>
                                            <small className="text-muted">Postado hoje</small>

                                        </Card.Body>
                                        <Card.Footer>
                                            <Button variant="primary">Ir para postagem</Button>

                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col md={{span:3, offset: 0}}>
                                    <Card>
                                        <Card.Img variant="top" src="./html.png" />
                                        <Card.Body>
                                            <Card.Title>Novidades do HTML5</Card.Title>
                                            <Card.Text>
                                                O que é HTML5. Surgido a partir de um consórcio entre a W3C (World Wide Web Consortium) e a WHATWG (Web Hypertext Application Technology Working ...                                </Card.Text>
                                            <small className="text-muted">Postado hoje</small>

                                        </Card.Body>
                                        <Card.Footer>
                                            <Button variant="primary">Ir para postagem</Button>

                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col md={{span:3, offset: 0}}>
                                    <Card>
                                        <Card.Img variant="top" src="./html.png" />
                                        <Card.Body>
                                            <Card.Title>Novidades do HTML5</Card.Title>
                                            <Card.Text>
                                                O que é HTML5. Surgido a partir de um consórcio entre a W3C (World Wide Web Consortium) e a WHATWG (Web Hypertext Application Technology Working ...                                </Card.Text>
                                            <small className="text-muted">Postado hoje</small>

                                        </Card.Body>
                                        <Card.Footer>
                                            <Button variant="primary">Ir para postagem</Button>

                                        </Card.Footer>
                                    </Card>
                                </Col>
                                

                            </Row>

                        </CardDeck>
                    </div>
                </div>
            </div>
        );
    }
}

export default Postagens;
