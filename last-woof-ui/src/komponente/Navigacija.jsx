import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Navigacija = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Last Woof</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Pocetna</Nav.Link>
                        <Nav.Link href="/onama">O nama</Nav.Link>
                        <Nav.Link href="/usluge">Usluge</Nav.Link>
                        <Nav.Link href="/pitanja">Pitanja</Nav.Link>
                        <Nav.Link href="/kontakt">Kontakt</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigacija;