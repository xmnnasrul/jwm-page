import React, { useEffect, useState } from 'react'
import Footer from './../Footer/Footer'
import { SiInstagram } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import './Contact.css'

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size
}

function Contact() {
    const [width] = useWindowSize();
    return (
        <>
            <div className="Contact">
                <div className="Title">
                    <h2>Contact Me</h2>
                </div>
                {width < 600 ? (
                    <div className='Contact-Mobile'>
                        <ul>
                            <li><a href='https://api.whatsapp.com/send/?phone=6281229250514&text&type=phone_number&app_absent=0' rel='noreferrer' target={'_blank'}>
                                <BsWhatsapp size={80} className='icon' />
                            </a></li>
                            <li><a href='https://www.instagram.com/_jokiwithme/' target={"_blank"} rel="noreferrer">
                                <SiInstagram size={80} className='icon' />
                            </a></li>
                            <li><a href='https://github.com/xmnnasrul?tab=repositories' rel="noreferrer" target={'_blank'}>
                                <FaGithub size={80} className='icon' />
                            </a></li>
                            <li><a href={`mailto:jokiwith.me123@gmail.com?subject=Hello&body=Hello%20`}>
                                <TfiEmail size={80} className='icon' />
                            </a></li>
                        </ul>
                    </div>
                ) : (
                    <div className="Contact-Content">
                        <a href='https://api.whatsapp.com/send/?phone=6281229250514&text&type=phone_number&app_absent=0' rel="noreferrer" target={'_blank'}>
                            <FaWhatsapp className='icon' size={80} />
                        </a>
                        <a href='https://www.instagram.com/_jokiwithme/' rel='noreferrer' target={'_blank'}>
                            <SiInstagram size={80} className="icon" />
                        </a>
                        <a href='https://github.com/xmnnasrul?tab=repositories' rel="noreferrer" target={'_blank'}>
                            <FaGithub size={80} className="icon" />
                        </a>
                        <a href={`mailto:jokiwith.me123@gmail.com?subject=Hello&body=Hello%20`}  >
                            <TfiEmail size={80} className="icon" />
                        </a>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Contact