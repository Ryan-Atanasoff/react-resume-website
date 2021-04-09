import { useState } from 'react'
import emailjs from 'emailjs-com';
import loadingGif from '../images/loader.gif'

const Contact = ({contact_data}) => {
    const [contact_name, setName] = useState('');
    const [contact_email, setEmail] = useState('');
    const [contact_subject, setSubject] = useState('');
    const [contact_message, setMessage] = useState('');
    const [spinner, setSpinner] = useState(false);
    const [success_message, setSuccessMessage] = useState(false);
    const [error_message, setErrorMessage] = useState(false);

    if (contact_data) {
        var name = contact_data.main.name;
        var street = contact_data.main.address.street;
        var city = contact_data.main.address.city;
        var state = contact_data.main.address.state;
        var zip = contact_data.main.address.zip;
        var phone = contact_data.main.phone;
        var message = contact_data.main.contactmessage;
        var user_id = contact_data.main.user_id;
        var service_id = contact_data.main.service_id;
        var template_id = contact_data.main.template_id;
    }
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        setSuccessMessage(false);
        setErrorMessage(false);

        const clearFields = () => {
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setSpinner(false);
        }

        if (contact_name && contact_email && contact_message) {
            setSpinner(true);
            emailjs.sendForm(service_id, template_id, e.target, user_id)
            .then((result) => {
                console.log(result.text);
                clearFields();
                setSuccessMessage(true);
            }, (error) => {
                console.log(error.text);
                clearFields();
                setErrorMessage(true);
            });
        } else {
            alert('Please enter required fields.');
        }
    }

    return (
        <section id="contact" name="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                    <h1><span>Get In Touch.</span></h1>
                </div>
                <div className="ten columns">
                    <p className="lead">{message}</p>
                </div>
            </div>

            <div className="row">
                <div className="eight columns">
                    <form id="contactForm" name="contactForm" onSubmit={sendEmail}>
                        <fieldset>
                            <div>
                                <label htmlFor="contactName">Name <span className="required">*</span></label>
                                <input type="text" size="35" id="contactName" name="contactName" value={contact_name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                <input type="text" size="35" id="contactEmail" name="contactEmail" value={contact_email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="contactSubject">Subject</label>
                                <input type="text" size="35" id="contactSubject" name="contactSubject" value={contact_subject} onChange={(e) => setSubject(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" value={contact_message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <div>
                                <button className="submit">Submit</button>
                                <span id={spinner ? "spinner" : "image-loader"}>
                                    <img alt="" src={loadingGif} />
                                </span>
                            </div>
                        </fieldset>
                    </form>
                    <div id={error_message ? "message-warning" : "message-warning-hide"}>Error sending message.</div>
                    <div id={success_message ? "message-success" : "message-success-hide"}>
                        <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                    </div>
                </div>

                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">
                        <h4>Address</h4>
                        <p className="address">
                            {name}<br />
                            {city}, {state} {zip}<br />
                        </p>
                        <h4>Phone</h4>
                        <p className="address">
                            <span>{phone}</span>
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default Contact;