import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
class MyNavBar extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
                <Navbar.Brand href="#home">Linttech</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#features">Início</Nav.Link>
                        <Nav.Link href="#pricing">Lead</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                        <Nav.Link href="#pricing">Contato</Nav.Link>

                        <Nav.Link href="#deets"><div class="instagram"></div></Nav.Link>
                        <Nav.Link href="#deets">FB</Nav.Link>
                        <Nav.Link href="#deets">TT</Nav.Link>

                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default MyNavBar