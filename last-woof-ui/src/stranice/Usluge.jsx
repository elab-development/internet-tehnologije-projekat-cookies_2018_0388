import React, {useEffect, useState} from 'react';
import {Bs1CircleFill, Bs2CircleFill, Bs3CircleFill, Bs4CircleFill, Bs5CircleFill, Bs6CircleFill} from "react-icons/bs";
import {Col, Row, Table} from "react-bootstrap";
import JednaUsluga from "../komponente/JednaUsluga";
import axiosInstanca from "../zahtev/axiosInstanca";
import Tabela from "../komponente/Tabela";
import {CgDanger} from "react-icons/cg";

const Usluge = () => {

    const ulogovan = window.sessionStorage.getItem('token') !== null;

    const user = ulogovan ? JSON.parse(window.sessionStorage.getItem('user')) : null;

    const [uslugeKorisnika, setUslugeKorisnika] = useState([]);

    useEffect(() => {
        if (ulogovan) {
            axiosInstanca.get(`/zahtevi/user/${user.id}`).then(res => {
                setUslugeKorisnika(res.data.podaci);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [ulogovan, user]);

    const nizIkonaIBoja = [
    {naziv: 'Sahrana', icon: <Bs1CircleFill />, boja: "primary"},
        {naziv: 'Kremacija', icon: <Bs2CircleFill />, boja: "secondary"},
        {naziv: 'Eutanazija', icon: <Bs3CircleFill />, boja: "success"},
        {naziv: 'Umrlica', icon: <Bs4CircleFill />, boja: "danger"},
        {naziv: 'Kovceg', icon: <Bs5CircleFill />, boja: "warning"},
        {naziv: 'Urna', icon: <Bs6CircleFill />, boja: "info"}
    ];

    const [usluge, setUsluge] = useState([]);

    useEffect(() => {
        axiosInstanca.get('/usluge').then(res => {

            let uslugePodaci = res.data.podaci;

            for (let i = 0; i < uslugePodaci.length; i++) {

                let objekat = nizIkonaIBoja.find(el => el.naziv === uslugePodaci[i].naziv);
                
                if (objekat === undefined) {
                    uslugePodaci[i].icon = <CgDanger />;
                    uslugePodaci[i].boja = "primary";
                }else{
                    uslugePodaci[i].icon = objekat.icon;
                    uslugePodaci[i].boja = objekat.boja;
                }
            }

            setUsluge(uslugePodaci);
        }).catch(err => {
            console.log(err);
        });
    }, []);


    return (
        <>
            <div className="header">
                <h1>Usluge</h1>
                <p>Usluge koje pruzamo </p>
            </div>
            <Row className="mt-3">
                {
                    usluge.map(usluga => (
                        <Col key={usluga.id}> <JednaUsluga naziv={usluga.naziv} cena={usluga.cena} icon={usluga.icon} boja={usluga.boja} /> </Col>
                    ))
                }
            </Row>
            <Row className="mt-3">
                <h1>Vase prethodne usluge</h1>
            </Row>

            {
                ulogovan && (
                    <Row className="mt-3">
                        <Tabela uslugeKorisnika={uslugeKorisnika} />
                    </Row>
                )
            }

            {
                !ulogovan && (
                    <Row className="mt-3">
                        <p>Morate biti ulogovani da biste videli vase prethodne usluge</p>
                    </Row>
                )
            }
        </>
    );
};

export default Usluge;