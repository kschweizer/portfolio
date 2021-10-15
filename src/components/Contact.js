import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Contact() {
    return (
        <div id="contact" className="contact">
            <Container>
                <h1 style={{ paddingTop : '10px', paddingBottom : '50px', borderTop : '2px solid #78d68b'}}>Contact</h1>
                <a href="mailto:kschweizer98@gmail.com"><Button>Contact Me</Button></a>
            </Container>
        </div>
    )
};
