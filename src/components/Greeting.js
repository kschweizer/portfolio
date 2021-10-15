import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Greeting() {
    return (
        <div id="about" className="Greeting">
            <div className="container section-header">
                <Card bg="transparent">
                <Card.Header as="h1">Who is Kyle Schweizer?</Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={7}>
                            <Card.Text className="text-align-left">
                                <p></p>
                            </Card.Text>
                        </Col>
                        <Col md={5}>
                            <img src={process.env.PUBLIC_URL + "/images/kyleNZ.png"} title="Me in Hobbiton" alt="Me in Hobbiton" style={{ maxWidth : '100%' }}></img>
                        </Col>
                    </Row>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
};
