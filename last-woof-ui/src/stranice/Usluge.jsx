import React from 'react';
import {Bs1CircleFill, Bs2CircleFill, Bs3CircleFill, Bs4CircleFill, Bs5CircleFill, Bs6CircleFill} from "react-icons/bs";
import {Col, Row} from "react-bootstrap";
import JednaUsluga from "../komponente/JednaUsluga";

const Usluge = () => {

    const usluge = [
        {
            id: 1,
            naziv: "Sahrana",
            cena: 5000,
            icon: <Bs1CircleFill />,
            boja: "light"
        },
        {
            id: 2,
            naziv: "Kremacija",
            cena: 10000,
            icon: <Bs2CircleFill />,
            boja: "secondary"
        },
        {
            id: 3,
            naziv: "Eutanazija",
            cena: 20000,
            icon: <Bs3CircleFill />,
            boja: "light"
        },
        {
            id: 4,
            naziv: "Kovceg",
            cena: 8000,
            icon: <Bs4CircleFill />,
            boja: "secondary"
        },
        {
            id: 5,
            naziv: "Urna",
            cena: 9000,
            icon: <Bs5CircleFill />,
            boja: "light"
        },
        {
            id: 6,
            naziv: "Umrlica",
            cena: 3000,
            icon: <Bs6CircleFill />,
            boja: "secondary"
        },
        ];

    return (
        <>
            <div className="header">
                <h1>Usluge</h1>
                <p> Ovo je najmanje što su naši mali prijatelji zaslužili! </p>
            </div>
            <Row className="mt-3">
                {
                    usluge.map(usluga => (
                        <Col key={usluga.id}> <JednaUsluga naziv={usluga.naziv} cena={usluga.cena} icon={usluga.icon} boja={usluga.boja} /> </Col>
                    ))
                }
            </Row>
        </>
    );
};

export default Usluge;