import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_04dvuxs', 'template_zn27ask', form.current, '2qN_1dnEivUO2zA2T')
            .then((result) => {
                console.log(result.text);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                alert("Submitted")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact centered">
            <div className="container pt">
                <div className="row justify-content-center">
                    <div className="col-6 align-self-center">
                        <h3 className='header-title'>Contact Me</h3>
                        <hr />
                        <p className='header-text'>If you wish to contact me please fill out the form below likewise you can reach me on my social media <Link to="/" className="link">links</Link>. Thanks :)</p>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb3">
                        <input type="text" className="form-control" placeholder='Your Name' name="name" onChange={event => setName(event.target.value)} value={name} />
                    </div>
                    <div className="mb3">
                        <input type="email" className="form-control" placeholder='Your Email' name="email" onChange={event => setEmail(event.target.value)} value={email} />
                    </div>
                    <div className="mb3">
                        <input type="text" className="form-control" placeholder='Subject' name="subject" onChange={event => setSubject(event.target.value)} value={subject} />
                    </div>
                    <div className="mb3">
                        <textarea rows="5" className="form-control" placeholder='Your Message' name="message" onChange={event => setMessage(event.target.value)} value={message} ></textarea>
                    </div>
                    
                    <button type='submit' className='btn btn-dark' value="send">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;