import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from "react-bootstrap";

const JednaUsluga = props => {
    const {naziv, cena, icon, boja} = props;
    return (
        <>
            <Alert variant={boja}>
                <Alert.Heading>{icon} {naziv}</Alert.Heading>
                <hr />
                <p className="mb-0">
                    Cena usluge je: {cena} dinara
                </p>
            </Alert>
        </>
    );
};

JednaUsluga.propTypes = {
    naziv: PropTypes.string.isRequired,
    cena: PropTypes.number.isRequired,
    icon: PropTypes.element.isRequired,
    boja: PropTypes.string.isRequired,
};

export default JednaUsluga;