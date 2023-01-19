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
                <a href='https://api.whatsapp.com/send/?phone=6281229250514&text&type=phone_number&app_absent=0'  rel="noreferrer"  target={'_blank'}>
                    <SiWhatsapp size={80}/>
                </a>
                <a>
                    <SiInstagram size={80}/>
                </a>
                <a href='https://github.com/xmnnasrul?tab=repositories'  rel="noreferrer"  target={'_blank'}>
                    <FaGithub size={80}/>
                </a>
                <a>
                    <TfiEmail size={80}/>
                </a>
                
                
                
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact