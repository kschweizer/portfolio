import React, { useState } from 'react';
import Youtube from './Youtube';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projects() {
    const [demoVisible, setDemoVisible] = useState(false);
    const width = window.innerWidth;
    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
          setDemoVisible(!demoVisible)
        );
      
        return (
            <Button variant="warning" onClick={decoratedOnClick}>{children}</Button>
        );
    }
    return (
        <Container id="projects" style={{ paddingTop : '75px', minHeight : '900px' }}>
            <h1 style={{ color : 'white', paddingTop : '10px', borderTop : '2px solid #78d68b', marginBottom : '25px' }}>Project Reflections</h1>
            <Container>
                <Accordion>
                <Card bg="transparent" text="white">
                    <Card.Header style={{ backgroundColor : '#5890c5' }}>
                        <h3 className="project-title">SellFast@Cal (CS169)</h3>
                    </Card.Header>
                    <Card.Body>
                        <Row sm={2} md={5}className="g-4">
                            <Col>
                                <Card bg="transparent" text="white" className="logo-card">
                                    <Card.Img variant="top" />
                                    <Card.Body className="logo-body">
                                        <Card.Title>Ruby</Card.Title>
                                        <img className="logo" src={process.env.PUBLIC_URL + "/logos/ruby.svg"} alt="Ruby"/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg="transparent" text="white" className="logo-card">
                                    <Card.Img variant="top" />
                                    <Card.Body className="logo-body">
                                        <Card.Title>Rails</Card.Title>
                                        <img className="logo" src={process.env.PUBLIC_URL + "/logos/rails.svg"} alt="Rails"/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg="transparent" text="white" className="logo-card">
                                    <Card.Img variant="top" />
                                    <Card.Body className="logo-body">
                                        <Card.Title>Heroku</Card.Title>
                                        <img className="logo" src={process.env.PUBLIC_URL + "/logos/heroku-icon.svg"} alt="Heroku"/>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Body>
                        <p className="text-align-left"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This was the semester project for Software Engineering (CS169) at UC Berkeley. The goals of the course were to teach
                        effective methodologies in software development, such as test-driven development and Agile practices. This was my first experience with creating a full-stack application using Ruby on Rails and HTML + CSS + Bootstrap. 
                            While the application is no longer available to be viewed online, you can watch a video of the final application demo 
                            by clicking on the button below.
                        </p>
                        <CustomToggle eventKey="0">{demoVisible ? "Hide Demo Video" : "Show Demo Video"}</CustomToggle> 
                    <Accordion.Collapse eventKey="0">
                        <>{demoVisible ? <Youtube videoID="sc1xSYAEcMI" width={width}/> : null}</>
                    </Accordion.Collapse>
                    </Card.Body>
                </Card>
                </Accordion>
            </Container>
            <Container>
                <Card bg="transparent" text="white">
                    <Card.Header style={{ backgroundColor : '#af3a3a' }}>
                        <h3 className="project-title">Fresno Field Archers Website</h3>
                    </Card.Header>
                    <Card.Body>
                        <Row md={5}className="g-4">
                            <Col>
                                <Card bg="transparent" text="white" className="logo-card">
                                    <Card.Img variant="top" />
                                    <Card.Body className="logo-body">
                                        <Card.Title>React</Card.Title>
                                        <img className="logo" src={process.env.PUBLIC_URL + "/logos/react.svg"} alt="React"/>
                                    </Card.Body>
                                </Card>
                            </Col> 
                            <Col>
                                <Card bg="transparent" text="white" className="logo-card">
                                    <Card.Img variant="top" />
                                    <Card.Body className="logo-body">
                                        <Card.Title>Python</Card.Title>
                                        <img className="logo" src={process.env.PUBLIC_URL + "/logos/python.svg"} alt="Python"/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg="transparent" text="white" className="logo-card">
                                    <Card.Img variant="top" />
                                    <Card.Body className="logo-body">
                                        <Card.Title>Django</Card.Title>
                                        <img className="logo" src={process.env.PUBLIC_URL + "/logos/django-icon.svg"} alt="Django"/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                            <Col>
                                <Card bg="transparent" text="white" className="logo-card">
                                    <Card.Img variant="top" />
                                    <Card.Body className="logo-body">
                                        <Card.Title>Nginx</Card.Title>
                                        <img className="logo" src={process.env.PUBLIC_URL + "/logos/nginx.svg"} alt="Nginx"/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg="transparent" text="white" className="logo-card">
                                    <Card.Img variant="top" />
                                    <Card.Body className="logo-body">
                                        <Card.Title>Digital Ocean</Card.Title>
                                        <img className="logo" src={process.env.PUBLIC_URL + "/logos/digital-ocean.svg"} alt="Digital Ocean"/>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Body>
                        <p className="text-align-left"> My first experience with creating a full-stack application using Ruby on Rails and HTML+CSS+Bootstrap. 
                            While the application is no longer able to be viewed online, you can watch a video of the final application demo 
                            by clicking on the button below.
                        </p>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
};
