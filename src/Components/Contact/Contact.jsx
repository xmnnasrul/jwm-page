import React from 'react'
import Footer from './../Footer/Footer'
import {SiWhatsapp, SiInstagram} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa' 
import {TfiEmail} from 'react-icons/tfi'
import './Contact.css'
function Contact() {
    return (
        <>
            <div className="Contact">
                <div className="Title">
                    <h2>Contact Me</h2>
                </div>
                <div className="Contact-Content">
                <a>
                    <SiWhatsapp size={60}/>
                </a>
                <a>
                    <SiInstagram size={60}/>
                </a>
                <a>
                    <FaGithub size={60}/>
                </a>
                <a>
                    <TfiEmail size={60}/>
                </a>
                
                
                
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact