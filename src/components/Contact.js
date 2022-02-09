import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Contact() {
    return (
        <div id="contact" className="contact">
            <Container>
            <h1 style={{ paddingTop : '10px', paddingBottom : '50px', borderTop : '2px solid #78d68b'}}>Contact</h1>
            <div className="contact-box">
                <div className="contact-text">
                    If you made it this far, thanks for reading!
                    <br></br><br></br>
                    If you need to contact me for anything, click the button under this box to send me an email.
                </div>
                <a href="mailto:kschweizer98@gmail.com" className="contact-button"><Button>Contact Me</Button></a>
            </div>
            </Container>
        </div>
    )
};
