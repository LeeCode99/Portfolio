
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

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
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" /><br/>
            <label>Email</label>
            <input type="email" name="user_email" /><br/>
            <label>Message</label>
            <textarea name="message" /><br/>
            <input type="submit" value="Send" />
        </form>
    );
}