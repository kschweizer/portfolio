import React from 'react';
import Youtube from './Youtube';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projects() {
    const width = window.innerWidth;
    return (
        <Container id="projects" style={{ paddingTop : '75px', minHeight : '900px' }}>
            <h1 style={{ color : 'white', paddingTop : '10px', borderTop : '2px solid #78d68b', marginBottom : '80px' }}>Project Reflections</h1>
            <Accordion bsPrefix="accordion">
            {/**************************   
            *** FRESNO FIELD ARCHERS ***
            ***************************/}
            <Accordion.Item eventKey="1" bsPrefix="accordion-item bg-transparent">
                <Accordion.Header bsPrefix="accordion-header accordion-header-dark">Fresno Field Archers</Accordion.Header>
                <Accordion.Body>
                    <Container className="border2">
                        <Card bg="transparent" text="white">
                            <Card.Header>
                                <Row> 
                                    <Col className="flex-container" md={6}>
                                        <img src={process.env.PUBLIC_URL + '/logos/ffa.svg'} alt="ffa logo" style={{ width : '35px', marginRight : '15px' }}/>
                                        <h5 className="text-align-left" style={{ paddingTop : '15px' }}><a className="App-link" href="https://fresnofieldarchers.com" target="_blank" rel="noreferrer">Website</a></h5>
                                    </Col>
                                    <Col className="flex-container" md={6}>
                                        <img src={process.env.PUBLIC_URL + '/logos/github-icon.svg'} alt="Github icon" style={{ width : '35px', marginLeft : 'auto' }}/>
                                        <h5 style={{ marginLeft : '15px', paddingTop : '15px' }}><a className="App-link" href="https://github.com/kschweizer/fresnofieldarchers" target="_blank" rel="noreferrer">Github</a></h5>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Row md={5}className="g-4">
                                    <Col>
                                        <Card bg="transparent" text="white" className="logo-card">
                                            
                                            <Card.Body className="logo-body">
                                                <p>React</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + "/logos/react.svg"} alt="React"/>
                                            </Card.Body>
                                        </Card>
                                    </Col> 
                                    <Col>
                                        <Card bg="transparent" text="white" className="logo-card">
                                            
                                            <Card.Body className="logo-body">
                                                <p>Python</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + "/logos/python.svg"} alt="Python"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card bg="transparent" text="white" className="logo-card">
                                            
                                            <Card.Body className="logo-body">
                                                <p>Django</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + "/logos/django-icon.svg"} alt="Django"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col>
                                        <Card bg="transparent" text="white" className="logo-card">
                                            
                                            <Card.Body className="logo-body">
                                                <p>PostgreSQL</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + "/logos/postgresql.svg"} alt="PostgreSQL"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    
                                    <Col>
                                        <Card bg="transparent" text="white" className="logo-card">
                                            
                                            <Card.Body className="logo-body">
                                                <p>Nginx</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + "/logos/nginx.svg"} alt="Nginx"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card bg="transparent" text="white" className="logo-card">
                                            
                                            <Card.Body className="logo-body">
                                                <p>AWS-S3</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + "/logos/aws-s3.svg"} alt="AWS-S3"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card bg="transparent" text="white" className="logo-card">
                                            <Card.Body className="logo-body">
                                                <p>Digital Ocean</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + "/logos/digital-ocean.svg"} alt="Digital Ocean"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body>
                                <p className="text-align-left"> Freelance project for the Fresno Field Archers, an archery club based in the lower foothills of Fresno County. 
                                </p>
                            </Card.Body>
                        </Card>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>

            {/**************************   
            ***** SELL-FAST AT CAL *****
            ***************************/}
            <Accordion.Item eventKey="2" bsPrefix="accordion-item bg-transparent">
                <Accordion.Header bsPrefix="accordion-header accordion-header-dark">SellFast@Cal</Accordion.Header>
                <Accordion.Body>
                    <Container className="border1">
                        <Accordion>
                        <Card bg="transparent" text="white">
                            <Card.Header>
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
                                            
                                            <Card.Body className="logo-body">
                                                <p>HTML</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + "/logos/html-5.svg"} alt="HTML5"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card bg="transparent" text="white" className="logo-card">
                                            
                                            <Card.Body className="logo-body">
                                                <p>Sass/Scss</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + "/logos/sass.svg"} alt="Sass"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card bg="transparent" text="white" className="logo-card">
                                            
                                            <Card.Body className="logo-body">
                                                <p>Ruby</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + "/logos/ruby.svg"} alt="Ruby"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card bg="transparent" text="white" className="logo-card">
                                            
                                            <Card.Body className="logo-body">
                                                <p>Rails</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + "/logos/rails.svg"} alt="Rails"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card bg="transparent" text="white" className="logo-card">
                                            
                                            <Card.Body className="logo-body">
                                                <p>Heroku</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + "/logos/heroku-icon.svg"} alt="Heroku"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body >
                                <p className="text-align-left" style={{ marginBottom : '75px' }}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project for Software Engineering (CS169), Fall 2019. The goals of the course were to teach
                                effective methodologies in software development, such as test-driven development and Agile practices. This was my first experience with creating a full-stack application using Ruby on Rails and HTML + CSS + Bootstrap. 
                                    While the application is no longer available to be viewed online, you can watch a video of the final application demo 
                                    by clicking on the button below.
                                </p>
                                <Youtube videoID="sc1xSYAEcMI" width={width}/>
                            </Card.Body>
                        </Card>
                        </Accordion>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>

            {/**************************   
            ********* DATABASE *********
            ***************************/}
            <Accordion.Item eventKey="3" bsPrefix="accordion-item bg-transparent">
                <Accordion.Header bsPrefix="accordion-header accordion-header-dark">Database</Accordion.Header>
                <Accordion.Body>
                    <Container className="border3">
                        <Card bg="transparent" text="white">
                            <Card.Header>
                                <Row> 
                                    <Col md={6}>
                                    </Col>
                                    <Col className="flex-container" md={6}>
                                        <img src={process.env.PUBLIC_URL + '/logos/github-icon.svg'} alt="Github icon" style={{ width : '35px', marginLeft : 'auto' }}></img>
                                        <h5 style={{ marginLeft : '15px', paddingTop : '15px' }}><a className="App-link" href="https://github.com/kschweizer/RDBMS" target="_blank" rel="noreferrer">Github</a></h5>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Row md={5} className="g-4">
                                    <Col>
                                        <Card bg="transparent" text="white" className="logo-card">
                                            <Card.Body className="logo-body">
                                                <p>Java</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + "/logos/java.svg"} alt="Java"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body>
                                <p>
                                Project for Data Structures (CS61B), Spring 2017. The task was to build a relational database management system (RDBMS) that uses a domain specific language (DSL) similar to that of
                                SQL. The project was carried out in teams of two, except for the initial planning phase, where were encouraged to work with another team to draft a design document that 
                                would serve as a rubric for each team's individual implementation. 
                                </p>
                            </Card.Body>
                        </Card>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>

            {/**************************   
            ****** GRAPH CONQUEROR *****
            ***************************/}
            <Accordion.Item eventKey="4" bsPrefix="accordion-item bg-transparent">
                <Accordion.Header bsPrefix="accordion-header accordion-header-dark">Graph Conquerer</Accordion.Header>
                <Accordion.Body>
                    <Container className="border2">
                        <Card bg="transparent" text="white">
                            <Card.Header>
                                <Row> 
                                    <Col md={6}>
                                    </Col>
                                    <Col className="flex-container" md={6}>
                                        <img src={process.env.PUBLIC_URL + '/logos/github-icon.svg'} alt="Github icon" style={{ width : '35px', marginLeft : 'auto' }}></img>
                                        <h5 style={{ marginLeft : '15px', paddingTop : '15px' }}><a className="App-link" href="https://github.com/kschweizer/Graph-Conquerer" target="_blank" rel="noreferrer">Github</a></h5>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Row md={5} className="g-4">
                                    <Col>
                                        <Card bg="transparent" text="white" className="logo-card">
                                            <Card.Body className="logo-body">
                                                <p>Python</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + '/logos/python.svg'} alt="Python"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body>
                                <p>Project for Algorithms (CS170), Spring 2018. The goal of this project was to design an algorithm that finds a reasonable solution to an NP-Hard graph-traversal problem. I worked with one other student 
                                    to plan and develop the solver. The solution that we developed utilized a probabilistic technique for finding global optimums known as simulated annealing. You can read more about the 
                                    problem as well as view the solver code in the provided Github link.
                                </p>
                            </Card.Body>
                        </Card>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>

            {/**************************   
            *********** CPU ************
            ***************************/}
            <Accordion.Item eventKey="5" bsPrefix="accordion-item bg-transparent">
                <Accordion.Header bsPrefix="accordion-header accordion-header-dark">RISC-V CPU</Accordion.Header>
                <Accordion.Body>
                    <Container className="border3">
                        <Card bg="transparent" text="white">
                            <Card.Body>
                                <Row md={5} className="g-4">
                                    <Col>
                                        <Card bg="transparent" text="white" className="logo-card">
                                            <Card.Body className="logo-body">
                                                <p>Logisim</p>
                                                <img className="logo" src={process.env.PUBLIC_URL + '/logos/logisim.svg'} alt="Logisim"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body>
                                <p>Project for Machine Structures (CS61C), Fall 2017. The task for this project was to implement a 32-bit two-cycle processor using Logisim, an educational tool for designing logic circuits. Although I didn't have to write a single 
                                    line of code, it was quite a lot of effort to replicate a CPU with only the basic circuit components provided by Logisim. I've included a screenshot of my CPU design.
                                </p>
                                <img src={process.env.PUBLIC_URL + '/images/CPU.png'} alt="CPU" style={{ width : '100%' }}/>
                            </Card.Body>
                        </Card>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
            
            </Accordion>
        </Container>
    )
};
