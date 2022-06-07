import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const PintarCards = () => {
    const url = "https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/starwars.json "
    const [starss, setStars] = useState([])

    const getData = async () => {
        const resp = await fetch(url)
        const data = await resp.json();
        setStars(data.results)
        console.log(data.results)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <center>
            <h1>Mostrar Cartas</h1>
            <Row xs={1} md={2} className="g-3" >
            {
            starss.map(item => {
                    return (
                        
                       
                        <Col key={item.id}>
                            <Card key={item.id} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                </Card.Body>
                            </Card>
                            </Col>
                            
                    )
                })
               
            }
             </Row>

             </center>
        </div>
    );
};

export default PintarCards;