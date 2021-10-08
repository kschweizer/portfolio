import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Education() {
    return (
        <Container id="education" className="education">
            <Row style={{ paddingBottom : '30px', borderBottom : '1px solid #78d68b' }}>
                <h1 style={{ paddingTop : '10px', borderTop : '2px solid #78d68b'}}>Education</h1>
                
                <Col md={1}>
                    <img src={process.env.PUBLIC_URL + '/images/cal-golden-bears.svg'} alt="Go Bears!" style={{ maxWidth : '100%' }}></img>
                </Col>
                <Col md={6} className="text-align-left">
                    <p>&nbsp;</p>
                    <h4>University of California, Berkeley</h4>
                </Col>
                <Col className="text-align-right" style={{ paddingTop : '20px' }} md={5}>
                    <p>B.A. in Computer Science</p>
                    <p>August 2016 - May 2020</p>
                </Col>
            </Row>
            <Card bg="transparent">
                <Card.Body>
                    <h4> Relevant Coursework </h4>
                    <ul className="text-align-left" style={{ marginLeft : '15px' }}>
                        <li>
                            CS 61A: The Structure and Interpretation of Computer Programs
                        </li>
                        <li>
                            CS 61B: Data Structures
                        </li>
                        <li>
                            CS 70: Discrete Mathematics and Probability Theory
                        </li>
                        <li>
                            CS 61C: Great Ideas of Computer Architecture (Machine Structures)
                        </li>
                        <li>
                            CS 161: Computer Security
                        </li>
                        <li>
                            CS 169: Software Engineering
                        </li>
                        <li>
                            CS 170: Efficient Algorithms and Intractable Problems
                        </li>
                        <li>
                            CS 186: Introduction to Database Systems
                        </li>
                        <li>
                            CS 188: Introduction to Artificial Intelligence
                        </li>
                        <li>
                            CS 189: Introduction to Machine Learning
                        </li>
                        <li>
                            COGSCI 131: Computational Models of Cognition
                        </li>
                        <li>
                            EECS 126: Probability and Random Processes
                        </li>
                        
                        
                    </ul>
                </Card.Body>
            </Card>
        </Container>
    )
};
