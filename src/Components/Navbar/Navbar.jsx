import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from './../Assets/logo.png'
function Navbarr() {
    return (
        <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="logo" style={{ width: '50px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <Nav.Link>
                            <Link to="/" style={{ textDecoration: "none" }}><span>Home</span></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about" style={{ textDecoration: "none" }}><span>About</span></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/jasa" style={{ textDecoration: "none" }}><span>Jasa</span></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact" style={{ textDecoration: "none" }}><span>Contact</span></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/rules" style={{ textDecoration: "none" }}><span>Rules</span></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/project" style={{ textDecoration: "none" }}><span>Project</span></Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navbarr