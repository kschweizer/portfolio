import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Greeting() {
    return (
        <div id="about" className="Greeting">
            <div className="container section-header">
                <Card bg="transparent">
                <Card.Header as="h1">About Me</Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={7}>
                            <Card.Text style={{ paddingTop : '25px' }}>
                                <p> I was born in 1998 and grew up in Lemoore, California, which is about 35 miles south of Fresno if you've never heard of it. It's also roughly 200 miles northwest/southeast of Los Angeles and 
                                    San Francisco, respectively, just in case you were hoping to find some useless geography trivia here.
                                    <br></br>
                                    <br></br>
                                    I graduated from UC Berkeley in 2020 with a bachelor's in computer science. It can be difficult to pin 
                                    down my interests, so the most granular detail I'll say here is that I'm interested in developing full stack user applications. I have experience working with
                                    data structures & algorithms, REST API's, databases, and frontend web design. I also studied fields such 
                                    as data science, artificial intelligence, and machine learning while in school, though I still consider myself to be somewhat of a novice at them.
                                    <br></br>
                                    <br></br>
                                    My personal hobbies include video games, music, playing guitar, and watching TV/movies. 
                                    With hobbies this general, there's no shortage of potentially overlapping interests we could have! I've included this photo of me in the Shire to gain favor with any 
                                    potential Tolkien fan reading this.
                                </p>
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
