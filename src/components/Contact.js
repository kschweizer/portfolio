import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Contact() {
    return (
        <div id="contact" className="contact">
            <Container>
                <h1 style={{ paddingTop : '10px', paddingBottom : '50px', borderTop : '2px solid #78d68b'}}>Contact</h1>
                <Card className="bg-dark" style={{ width : "32rem", marginLeft : "auto", marginRight : "auto" }}>
                    <Card.Body>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        If you made it this far, thanks for reading!
                        <br></br><br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        If you need to contact me for anything, click the button under this box to shoot me an email.
                    </Card.Body>
                </Card>
                <br></br>
                <a href="mailto:kschweizer98@gmail.com"><Button>Contact Me</Button></a>
            </Container>
        </div>
    )
};
