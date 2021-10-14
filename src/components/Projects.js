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
            <Container style={{ borderLeft : '2px solid #276fbf'}}>
                <Accordion>
                <Card bg="transparent" text="white">
                    <Card.Header>
                        <h3 className="project-title">SellFast@Cal (CS169)</h3>
                        <Row> 
                            <Col md={6}></Col>
                            <Col className="flex-container" md={6}>
                                <img src={process.env.PUBLIC_URL + '/logos/github-icon.svg'} alt="Github icon" style={{ width : '35px', marginLeft : 'auto' }}></img>
                                <h5 style={{ marginLeft : '15px', paddingTop : '15px' }}><a className="App-link" href="https://github.com/EricLui-409/SellFast-at-Cal" target="_blank" rel="noreferrer">Github</a></h5>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row sm={2} md={5}className="g-4">
                            <Col>
                                <Card bg="transparent" text="white" className="logo-card">
                                    <Card.Img variant="top" />
                                    <Card.Body className="logo-body">
                                        <Card.Title>HTML</Card.Title>
                                        <img className="logo" src={process.env.PUBLIC_URL + "/logos/html-5.svg"} alt="HTML5"/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg="transparent" text="white" className="logo-card">
                                    <Card.Img variant="top" />
                                    <Card.Body className="logo-body">
                                        <Card.Title>Sass/Scss</Card.Title>
                                        <img className="logo" src={process.env.PUBLIC_URL + "/logos/sass.svg"} alt="Sass"/>
                                    </Card.Body>
                                </Card>
                            </Col>
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
                    <Card.Body >
                        <p className="text-align-left" style={{ marginBottom : '75px' }}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This was the semester project for Software Engineering (CS169) at UC Berkeley. The goals of the course were to teach
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
            <Container style={{ borderLeft : '2px solid #a31621'}}>
                <Card bg="transparent" text="white" style={{ marginTop : '100px' }}>
                    <Card.Header>
                        <h3 className="project-title">Fresno Field Archers Website</h3>
                        <Row> 
                            <Col md={6}>
                                <h5 className="text-align-left" style={{ paddingTop : '15px' }}><a className="App-link" href="https://fresnofieldarchers.com" target="_blank" rel="noreferrer">Website</a></h5>
                            </Col>
                            <Col className="flex-container" md={6}>
                                <img src={process.env.PUBLIC_URL + '/logos/github-icon.svg'} alt="Github icon" style={{ width : '35px', marginLeft : 'auto' }}></img>
                                <h5 style={{ marginLeft : '15px', paddingTop : '15px' }}><a className="App-link" href="https://github.com/kschweizer/fresnofieldarchers" target="_blank" rel="noreferrer">Github</a></h5>
                            </Col>
                        </Row>
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
