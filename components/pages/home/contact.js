import {useState} from "react";
import {handleChangeDataFn, parseErrorResponse, showAlert} from "../../../helpers/helpers";

const Contact = () => {
    const [loading, setLoading] = useState();
    const [data, setData] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res?.status === 200) {
                setData({});
                showAlert('success', 'Success', 'Your message was submitted successfully!');
            } else {
                showAlert('error', 'Error', parseErrorResponse({}));
            }
        }).catch((e) => {
            console.log(e);
            showAlert('error', 'Error', parseErrorResponse({}));
        }).finally(() => {
            setLoading(false);
        });
        //setLoading(true);
        //setErrors({});
        //await sendMail();
        /*makeRequest(POST_REQUEST, endpoints.contact, data, () => {
            showAlert('success', 'Success', 'Your message was submitted successfully!');
            setData({});
        }, error => {
            if (error.response.status === 400)
                setErrors(error.response.data.data.errors);
            else
                showAlert('error', 'Error', parseErrorResponse(error));
        }, () => {
            setLoading(false);
        }).then()*/
    }
    console.log(data);


    return (
        <section id="contact" className="s-contact">
            <div className="overlay"/>
            {/* <div className="contact__line"/> */}
            <div className="row section-header" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead">Contact Us</h3>
                    <h1 style={{marginTop: "1rem"}} className="display-3 display-2--light">
                        Unlock a world of possibilities with us!
                    </h1>
                    <a style={{marginTop: "0"}}
                       href="mailto:business@glitexsolutions.co.ke" className="btn btn--stroke">
                        Email Us
                    </a>
                </div>
            </div>
            <div className="row contact-content" data-aos="fade-up">
                <div className="contact-primary">
                    <h1 className="h6">Send Us A Message</h1>
                    <form>
                        <fieldset>
                            <div className="form-field">
                                <input name="name"
                                       onChange={e => handleChangeDataFn(e, setData)}
                                       type="text" id="contactName" placeholder="Your Name"
                                       minLength="2" required aria-required="true" className="full-width"/>
                            </div>
                            <div className="form-field">
                                <input name="email"
                                       onChange={e => handleChangeDataFn(e, setData)}
                                       type="email" id="contactEmail" placeholder="Your Email"
                                       required aria-required="true" className="full-width"/>
                            </div>
                            <div className="form-field">
                                <input name="subject"
                                       onChange={e => handleChangeDataFn(e, setData)}
                                       type="text" id="contactSubject" placeholder="Subject"
                                       className="full-width"/>
                            </div>
                            <div className="form-field">
                                <textarea name="message"
                                          onChange={e => handleChangeDataFn(e, setData)}
                                          id="contactMessage" placeholder="Your Message" rows="10"
                                          cols="50" required aria-required="true" className="full-width"/>
                            </div>
                            <div className="form-field">
                                {!loading &&
                                <button style={{color: "black"}} disabled={loading}
                                        onClick={handleSubmit}
                                        className="full-width btn--primary">Submit
                                </button>}
                                {loading && <div className="submit-loader">
                                    <div className="text-loader">Sending...</div>
                                    <div className="s-loader">
                                        <div className="bounce1"/>
                                        <div className="bounce2"/>
                                        <div className="bounce3"/>
                                    </div>
                                </div>}
                            </div>
                        </fieldset>
                    </form>

                    <div className="message-warning">
                        Something went wrong. Please try again.
                    </div>

                    <div className="message-success">
                        Your message was sent, thank you!<br/>
                    </div>
                </div>
                <div className="contact-secondary">
                    <div className="contact-info">
                        <h1 className="h6 hide-on-fullwidth">Contact Info</h1>
                        <div className="cinfo">
                            <h5>Where to Find Us</h5>
                            <p>
                            Lumumba Drive <br/> Royal Plaza<br/>
                            </p>
                        </div>
                        <div className="cinfo">
                            <h5>Email Us At</h5>
                            <p>
                                <a href="mailto:business@glitexsolutions.co.ke" className="__cf_email__">
                                    business@glitexsolutions.co.ke
                                </a><br/>
                                <a href="mailto:info@glitexsolutions.co.ke" className="__cf_email__">
                                    info@glitexsolutions.co.ke
                                </a>
                            </p>
                        </div>
                        <div className="cinfo">
                            <h5>Call Us At</h5>
                            <p>
                                Phone: (+254) 707021821
                            </p>
                        </div>
                        <ul className="contact-social">
                            <li>
                                <a href="https://facebook.com/glitexsolutionslimited/">
                                    <i className="fa fa-facebook" aria-hidden="true"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/GlitexSolutions">
                                    <i className="fa fa-twitter" aria-hidden="true"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/glitexsolutions/">
                                    <i className="fa fa-instagram" aria-hidden="true"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/glitex-solutions/">
                                    <i className="fa fa-linkedin" aria-hidden="true"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
