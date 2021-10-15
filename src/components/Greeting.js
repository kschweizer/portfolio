import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Greeting() {
    return (
        <div id="about" className="Greeting">
            <div className="container section-header">
                <Card bg="transparent">
                <Card.Header as="h1">Who am I?</Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={7}>
                            <Card.Text className="text-align-left" style={{ paddingTop : '25px' }}>
                                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was born in 1998 and grew up in Lemoore, California, which is about 35 miles south of Fresno if you've never heard of it. It's also roughly 200 miles northwest/southeast of Los Angeles and 
                                    San Francisco, respectively, just in case you were hoping to find some useless geography trivia here.
                                    <br></br>
                                    <br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I graduated from UC Berkeley in 2020 with a bachelor's in computer science. It can be difficult to pin 
                                    down my interests, so the most granular detail I'll say here is that I'm interested in developing full stack user applications. I enjoy designing and learning about
                                    API's, data structures, databases, and recently front-end tools and libraries like React. While at university I also studied fields such 
                                    as security, artificial intelligence, and machine learning, though I still don't consider myself a master of them by any means. 
                                    <br></br>
                                    <br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On the more personal side of things I'm in to video games, music, playing guitar, and watching TV/movies. 
                                    With hobbies this general, there's no shortage of potentially overlapping interests we could have! I've included this photo of me in the Shire just 
                                    in case there's a Tolkien fan reading.
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
