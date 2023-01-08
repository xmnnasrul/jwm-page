import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Logo from './../Assets/logo.png'
function Navbar() {
    return (
        <div className='Navbar'>
            <a href="https://instagram">
                <img src={Logo} alt="logo" />
            </a>
            <Link to="/" style={{ textDecoration: "none" }}><span>Home</span></Link>
            <Link to="/about" style={{ textDecoration: "none" }}><span>About</span></Link>
            <Link to="/jasa" style={{ textDecoration: "none" }}><span>Jasa</span></Link>
            <Link to="/contact" style={{ textDecoration: "none" }}><span>Contact</span></Link>
            <Link to="/rules" style={{ textDecoration: "none" }}><span>Rules</span></Link>
        </div>
    )
}

export default Navbar