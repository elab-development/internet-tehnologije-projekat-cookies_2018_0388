import React from 'react';
import {Accordion, Row} from "react-bootstrap";

const Pitanja = () => {

    const pitanja = [
        {
            id: 1,
            pitanje: "Za koje vrste ljubimaca pruzate usluge?",
            odgovor: "Usluge pruzamo primarno za pse, macke, ptice, ribice, zeceve, kornjace i hrcke, ali je moguc dogovor i za sve ostale vrste zivotinja."
        },
        {
            id: 2,
            pitanje: "Da li pruzate usluge u inostranstvu?",
            odgovor: "Ne, nazalost, idalje nase preduzece posluje samo u granicama Republike Srbije, ali je u planu prosiranje."
        },
        {
            id: 3,
            pitanje: "Da li je moguce izvrsiti eutanaziju, te onda sahranu ili kremaciju?",
            odgovor: "Da, nasa firma ima saradnju sa veterinarskom ordinacijom i pruzamo usluge eutanazije."
        },
        {
            id: 4,
            pitanje: "Da li dolazite po nase ljubimce ili ih mi moramo dovesti?",
            odgovor: "Obe opcije su moguce, odluka je na Vama."
        },
        {
            id: 5,
            pitanje: "Da li postoji mogucnost sahranjivanja vise ljubimaca zajedno?",
            odgovor: "Postoji, Vasi ljubimci mogu ostati zauvek zajedno, ali se usluga naplacuje pojedinacno po ljubimcu."
        }
        ];

    return (
        <>
            <div className="header">
                <h1>Najcesce postavljena pitanja</h1>
            </div>
            <Row className="mt-3">
                <Accordion defaultActiveKey="1">
                {
                    pitanja.map(pitanje => (
                        <Accordion.Item key={pitanje.id} eventKey={pitanje.id}>
                            <Accordion.Header><b>{pitanje.pitanje}</b></Accordion.Header>
                            <Accordion.Body>
                                {pitanje.odgovor}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                }
                </Accordion>

            </Row>
        </>
    );
};

export default Pitanja;