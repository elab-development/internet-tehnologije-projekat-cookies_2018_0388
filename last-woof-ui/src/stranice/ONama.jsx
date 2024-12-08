import React from 'react';
import andrea from '../slike/andrea.jpg';
import ivana from '../slike/ivana.jpg';
import {Col, Row, Image} from "react-bootstrap";


const ONama = () => { 

    const ONama=[

        {
            id:1,
            imeprezime: "Ivana Milidragovic",
            brojgodina: "23",
            opis:"Idejni tvorac, svoju ljubava prema životinjama pretočila sam u delo, kroz naše preduzeće, želeći da pokažem da o našim malim prijateljima brinemo, uslovno rečeno, do kraja života.  ",
            slika: ivana
        },

        {
            id:2,
            imeprezime: "Andrea Tambur",
            brojgodina: "24",
            opis: "Na oduševljenje idejom prijateljice Ivane, prihvatila sam da budem deo svega u nadi da ćemo u zamisli uspeti. Naša ideja je oživela, a na naše ljubimce sada zauvek imamo sečanje i način da se od njih oprostimo na što 'lepši način'-kako i zaslužuju.",
            slika: andrea

        }

    ];

    return (
       <>
        <div className="header">
                <h1>O nama</h1>
            </div>
       <Row>

       {
                    ONama.map(mi => (
                        <Col key={mi.id}>
                            
                            <h1>
                                {
                                    mi.imeprezime
                                
                                }
                            </h1>

                            <h4>
                                {
                                    mi.brojgodina
                                } godine
                            </h4>

                            <Image widht={600} height={400}  src={mi.slika}>

                            </Image>
                            
                            <p>
                                {
                                    mi.opis
                                }
                            </p>
                            
                             </Col>
                    ))
                }

       </Row>
       </>
    );
};

export default ONama;
