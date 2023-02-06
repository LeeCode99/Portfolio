
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Email() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_phantom', 'template_wnhflqn', form.current, 'aDG-kBbhiK6bp1zf6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (

        <Form ref={form} onSubmit={sendEmail} className="EmailForm">
            {/* <h5 style="font-style:italic;">Inquries</h5><hr></hr> */}
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="user_email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} />
            </Form.Group>
            
            <Button variant="secondary" type="submit">
                Submit
            </Button>

        </Form>

    );
}