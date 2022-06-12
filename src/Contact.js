import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
const SERVICE_ID = "service_04dvuxs";
const TEMPLATE_ID = "2qN_1dnEivUO2zA2T";
const PUBLIC_KEY = "2qN_1dnEivUO2zA2T"

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-form">
            <div className="container-sm">
                <div className="section-title">
                    <h3>Contact Form</h3>
                    <hr />
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div class="mb-3">
                        <label className='form-label'>Name</label>
                        <input type="text" name="user_name" className='form-control' />
                    </div>
                    <div class="mb-3">
                        <label className='form-label'>Email</label>
                        <input type="email" name="user_email" placeholder="name@example.com" className='form-control' />
                    </div>
                    <div class="mb-3">
                        <label className='form-label'>Message</label>
                        <textarea className='form-control' name="message" rows={5} />
                    </div>
                    <input type="submit" value="Send" className='btn btn-dark submit-btn' />
                </form>
            </div>
        </div>
    )
}

export default Contact
