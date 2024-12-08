import React, {useState} from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import useForm from "../form-hooks/FormData";
import {BsFillPhoneVibrateFill, BsFillPinMapFill, BsMailbox} from "react-icons/bs";

const Kontakt = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        window.location.reload();
    };

    const { formData, handleChange } = useForm(
        {
            ime: '',
            prezime: '',
            email: '',
            pitanje: ''
        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setShow(true);
    }

    return (
        <>
            <div className="header">
                <h1>Kontakt</h1>
            </div>

                <Form>
                    <Row className="mt-3">
                    <Col>
                        <Form.Control onChange={handleChange} name="ime" type="text" placeholder="Unesite ime" />
                    </Col>

                    <Col>
                        <Form.Control onChange={handleChange} name="prezime" type="text" placeholder="Unesite prezime" />
                    </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col>
                            <Form.Control onChange={handleChange} name="email" type="email" placeholder="Unesite email" />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Control onChange={handleChange} name="pitanje" as="textarea" rows={3} placeholder="Unesite pitanje" />
                        </Col>
                    </Row>
                    <hr/>
                    <Button variant="dark" type="button" onClick={handleSubmit}>
                        Posalji pitanje
                    </Button>
                </Form>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Zdravo, {formData.ime}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Uspesno ste postavili pitanje, odgovor mozete ocekivati u roku od 24h na email adresu {formData.email}.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Zatvori
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className="mt-3">
                <Col>
                    <>

                        <h3><BsFillPinMapFill /> Adresa</h3>
                        <p>Njegoseva 27</p>
                    </>
                    <>

                        <h3> <BsMailbox /> Email</h3>
                        <p>kontakt@lastwoof.com</p>
                    </>
                    <>


                        <h3><BsFillPhoneVibrateFill /> Telefon</h3>
                        <p>011 3000 200</p>
                    </>
                </Col>
                <Col>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.0659013324553!2d20.472750776202925!3d44.79984557751989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7075a9e75a2d%3A0x8fe18b4043de9c70!2sNjego%C5%A1eva%2027%2C%20Beograd%2011000!5e0!3m2!1sen!2srs!4v1704807048795!5m2!1sen!2srs"
                        width="600" height="450" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>

        </>
    );
};

export default Kontakt;