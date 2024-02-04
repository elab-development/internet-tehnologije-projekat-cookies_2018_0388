import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useCookies} from "react-cookie";

const Navigacija = () => {

    const [cookies, setCookies] = useCookies(["username"]);

    let tokenPostoji = window.sessionStorage.getItem("token");

    let userUlogovan = tokenPostoji ? JSON.parse(window.sessionStorage.getItem("user")) : null;

    const handleLogout = () => {
        window.sessionStorage.removeItem("token");
        window.sessionStorage.removeItem("user");
        setCookies("username", "", {path: "/"});
        window.location.href = "/";
    }

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Last Woof</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Pocetna</Nav.Link>
                        <Nav.Link href="/onama">O nama</Nav.Link>
                        <Nav.Link href="/usluge">Usluge</Nav.Link>
                        <Nav.Link href="/pitanja">Pitanja</Nav.Link>
                        <Nav.Link href="/rase">Rase pasa</Nav.Link>
                        <Nav.Link href="/kontakt">Kontakt</Nav.Link>
                        {
                            userUlogovan && userUlogovan.rolaUsera === "admin" ? <Nav.Link href="/admin">Admin</Nav.Link> : null
                        }
                        {
                            userUlogovan === null ? <Nav.Link href="/login">Login</Nav.Link> : null
                        }
                        {
                            userUlogovan === null ? <Nav.Link href="/register">Registruj se</Nav.Link> : null
                        }

                        {
                            userUlogovan ? <Nav.Link href="#" onClick={handleLogout}>Logout</Nav.Link> : null
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigacija;