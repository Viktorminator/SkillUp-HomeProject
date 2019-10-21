import React from 'react'
import SubHeader from '../SubHeader/SubHeader'
import telegram from '../About/Section/HireButton/telegram.png'

import './Contacts.css'

function Contacts() {
    return (
        <div className="get-contact">
            <SubHeader
                className='get-contact-header'
                title='Contact'
                id = 'Contact'
            />
            <section className="get-contact-section"  id='Footer'>
                <div className="contact-part-1">
                    <div className="contact-input">
                        <input type="text" className="name" id="name" placeholder="YOUR NAME"/>
                        <input type="text" className="e-mail" id="e-mail" placeholder="E-MAIL"/>
                        <input type="text" className="subject" id="subject" placeholder="THE SUBJECT"/>
                        <input type="text" className="message" id="message" placeholder="YOUR MESSAGE"/>
                    </div>
                    <div className="contact-text">
                        <h3>
                            Contact details
                        </h3>
                        <p>
                            Do you have other questions?  Don’t worry, there aren’t any dumb questions.
                            Just fill out the form below and we’ll get back to you as soon as possible
                            (usually within one business day). <br/> <br/>
                            <span>
                                Kyiv city, 03148 <br/>
                                str. Damborskiy, h. 50 <br/>
                                email: shamanik43@gmail.com <br/>
                                093 365 12 68 <br/>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="contact-part-2 contact-button">
                    <img src={telegram} alt="telegram"/> Submit
                </div>
            </section>
        </div>
    )
}

export default Contacts