import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import axiosInstanca from "../zahtev/axiosInstanca";
import Tabela from "../komponente/Tabela";

const Admin = () => {

    const zahteviPoStranici = 10;
    const [trenutnaStranica, setTrenutnaStranica] = useState(1);
    const [trenutniZahtevi, setTrenutniZahtevi] = useState([]);

    useEffect(() => {
       filtrirajZahteve();
    }, [trenutnaStranica]);

    function filtrirajZahteve() {
        axiosInstanca.get('/paginacija?page='+trenutnaStranica+'&per_page=' + zahteviPoStranici).then(res => {
            setTrenutniZahtevi(res.data.podaci);
            console.log("Podaci: ", res.data.podaci);
        }).catch(err => {
            console.log(err);
        });
    }

    const povecajStranicu = () => {
        setTrenutnaStranica(trenutnaStranica + 1);
        filtrirajZahteve();
    }

    const smanjiStranicu = () => {
        setTrenutnaStranica(trenutnaStranica - 1);
        filtrirajZahteve();
    }

    return (
        <>
            <div className="header">
                <h1>Admin stranica</h1>
            </div>
            <Row className="mt-3">
                <Tabela uslugeKorisnika={trenutniZahtevi} />
            </Row>
            <Row className="mt-3">
                <Col>
                    <button className="btn btn-dark m-3" onClick={() => smanjiStranicu()}
                            disabled={trenutnaStranica === 1}>Prethodna stranica
                    </button>
                    <button className="btn btn-dark m-3"
                            onClick={() => povecajStranicu()}>Sledeca
                        stranica
                    </button>
                </Col>

            </Row>

        </>
    );
};

export default Admin;