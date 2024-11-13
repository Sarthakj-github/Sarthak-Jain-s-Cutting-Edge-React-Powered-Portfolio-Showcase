import React from 'react';
import "./contacts.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { FaDirections } from "react-icons/fa";
import { FaNfcDirectional } from "react-icons/fa6";

function Contact({ rico, content }) {
    return (
        <div className="contact">
            {rico}
            <div className='content'>{content}</div>
        </div>
    );
}

function Contacts() {
    return (
        <section className="Contacts">
            {/* <h1 className="heading">Contacts</h1> */}
            <div className="contacts">
                <Contact
                    rico={<BiSolidPhoneCall className='icor' />}
                    content="+91 9557234083"
                />
                <Contact
                    rico={<BiLogoGmail className='icor' />}
                    content="jainsarthak97162@gmail.com 30836csai@gmail.com"
                />
                <Contact
                    rico={<FaDirections className='icor' />}
                    content="Jain Bazar Jaswant Nagar Etawah-206245"
                />
                <Contact
                    rico={<FaNfcDirectional className='icor' />}
                    content="B-Block Boys Hostel PSIT Kanpur-205309"
                />
            </div>
        </section>
    );
}

export default Contacts;
