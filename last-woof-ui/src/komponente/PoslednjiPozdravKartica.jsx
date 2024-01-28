import React from 'react';
import PropTypes from 'prop-types';
import {Card} from "react-bootstrap";

const PoslednjiPozdravKartica = props => {
    const {ime, pozdrav, slika} = props;

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img width={286} height={180} variant="top" src={slika} />
                <Card.Body>
                    <Card.Title>{ime}</Card.Title>
                    <Card.Text>
                        {pozdrav}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

PoslednjiPozdravKartica.propTypes = {
    ime: PropTypes.string.isRequired,
    pozdrav: PropTypes.string.isRequired,
    slika: PropTypes.string.isRequired,
};

export default PoslednjiPozdravKartica;
