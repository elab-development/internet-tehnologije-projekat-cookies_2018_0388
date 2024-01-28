import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import useForm from "../form-hooks/FormData";
import axiosInstanca from "../zahtev/axiosInstanca";

const Register = () => {

    const [poruka, setPoruka] = React.useState('');

    const { formData, handleChange } = useForm(
        {
            email: '',
            password: '',
            name: '',
            brojTelefona: '',
        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            email: formData.email,
            password: formData.password,
            name: formData.name,
            brojTelefona: formData.brojTelefona,
            confirm_password: formData.password
        }
        axiosInstanca.post('/register', data).then(res => {
            console.log(res.data);
            setPoruka(res.data.poruka + ". Mozete se ulogovati");
        }).catch(err => {
            console.log(err);
            setPoruka('Greska prilikom registracije.');
        });
    }

    return (
        <>
            <div className="header">
                <h1>Stranica za registraciju korisnika</h1>
            </div>

            <Row>
                <Form>
                    <Row className="mt-3">
                        <Col>
                            <Form.Control onChange={handleChange} name="name" type="text" placeholder="Unesite ime" />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Control onChange={handleChange} name="email" type="email" placeholder="Unesite email" />
                        </Col>

                        <Col>
                            <Form.Control onChange={handleChange} name="password" type="password" placeholder="Unesite password" />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Control onChange={handleChange} name="brojTelefona" type="text" placeholder="Unesite broj telefona" />
                        </Col>
                    </Row>
                    <hr/>
                    <Button variant="dark" type="button" onClick={handleSubmit}>
                        Registruj se
                    </Button>
                    <p>{poruka}</p>
                </Form>
            </Row>
        </>
    );
};

export default Register;