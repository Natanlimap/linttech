import React, { Component } from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, InputGroup, Button, FormControl } from 'react-bootstrap';

class MyNavBar extends Component {


    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
                <Navbar.Brand href="#home">Linttech</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#Início">Início</Nav.Link>
                        <Nav.Link href="#Blog">Blog</Nav.Link>
                        <Nav.Link href="#Contato">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MyNavBar