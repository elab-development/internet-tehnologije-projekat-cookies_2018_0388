import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import useForm from "../form-hooks/FormData";
import axiosInstanca from "../zahtev/axiosInstanca";

const Login = () => {

    const { formData, handleChange } = useForm(
        {
            email: '',
            password: ''
        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();

        axiosInstanca.post('/login', formData).then(res => {
            console.log(res.data);
            window.sessionStorage.setItem('token', res.data.podaci.token);
            window.sessionStorage.setItem('user', JSON.stringify(res.data.podaci.user));
            window.location.href = '/';
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <>
            <div className="header">
                <h1>Login stranica</h1>
            </div>

            <Row>
                <Form>
                    <Row className="mt-3">
                        <Col>
                            <Form.Control onChange={handleChange} name="email" type="email" placeholder="Unesite email" />
                        </Col>

                        <Col>
                            <Form.Control onChange={handleChange} name="password" type="password" placeholder="Unesite password" />
                        </Col>
                    </Row>
                    <hr/>
                    <Button variant="dark" type="button" onClick={handleSubmit}>
                        Login
                    </Button>
                </Form>
            </Row>
        </>
    );
};

export default Login;