import React from 'react';
import PropTypes from 'prop-types';
import {Table} from "react-bootstrap";

const Tabela = props => {
    const {uslugeKorisnika} = props;
    return (
        <>
            <Table hover variant="dark">
                <thead>
                <tr>
                    <th>Naziv ljubimca</th>
                    <th>Vrsta ljubimca</th>
                    <th>Usluga</th>
                    <th>User</th>
                    <th>Hitnost</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                     uslugeKorisnika.map(usluga => (
                        <tr key={usluga.id}>
                            <td>{usluga.nazivLjubimca}</td>
                            <td>{usluga.vrstaLjubimca}</td>
                            <td>{usluga.usluga.naziv}</td>
                            <td>{usluga.user.name}</td>
                            <td>{usluga.hitnost.naziv}</td>
                            <td>{usluga.status}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </>
    );
};

Tabela.propTypes = {
    uslugeKorisnika: PropTypes.array.isRequired
};

export default Tabela;