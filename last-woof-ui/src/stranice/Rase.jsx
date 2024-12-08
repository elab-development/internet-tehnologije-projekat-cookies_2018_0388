import React, {useEffect, useState} from 'react';
import axiosInstanca from "../zahtev/axiosInstanca";
import {Row, Tab, Table} from "react-bootstrap";

const Rase = () => {

    const [rase, setRase] = useState([]);

    useEffect(() => {
        axiosInstanca.get('/rase').then(res => {
            let nizRasa = res.data.podaci.message;
            let niz = [];

            for (const [key, value] of Object.entries(nizRasa)) {
                let objekat = {
                    rasa: key,
                    podrase: value
                };
                niz.push(objekat);
            }

            setRase(niz);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <div className="header">
                <h1>Rase pasa</h1>
            </div>
            <Row>
                <Table striped responsive>
                    <thead>
                    <tr>
                        <th>Rasa</th>
                        <th>Podrase</th>
                    </tr>
                    </thead>
                    <tbody>
{
                        rase.map((rasa, index) => (
                            <tr key={index}>
                                <td>{rasa.rasa}</td>
                                <td>{rasa.podrase.join(', ')}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </Row>
        </>
    );
};

export default Rase;