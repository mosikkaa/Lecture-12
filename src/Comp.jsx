import React from 'react'
import logo from './assets/react.svg'
import './Comp.css'

export const Comp = () => {
    return (
        <header>
            <div className='logo' style={{display:'flex',alignItems: 'center',gap:'10px'}}>
                <img src={logo} style={{ width: '50px', height: '50px'}} />
                <span>LukaMeskhiWeb</span>
            </div>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='log' style={{display: 'flex', justifyContent: 'space-between',gap:'5px'}}>
                <button style={{border:'0px solid black',backgroundColor:'transparent',cursor:'pointer'}}>ENG</button>
                <button style={{padding:'10px 12px',borderRadius:'8px',border:'0px solid black',cursor:'pointer',backgroundColor:'#101020'}}>Get a quote</button>
            </div>
        </header>
    )
}

export const Main = () => {
    return (
        <main>
            <div className="info">
                <h1>Get contact with us</h1>
                <p>
                    Send a message with a short brief (what you need, size, location, deadline).
                    We will get back in one business day.
                </p>
                <ul className='companyInfo'>
                    <li><i className="fa-solid fa-envelope"></i> meskhiluka@gmail.com</li>
                    <li><i className="fa-solid fa-phone"></i> +995 555 555 555</li>
                    <li><i className="fa-solid fa-location-dot"></i> Tbilisi,Georgia</li>
                </ul>
                <ul className='social-media'>
                    <li><button>Instagram</button></li>
                    <li><button>Facebook</button></li>
                    <li><button>LinkedIn</button></li>
                </ul>
            </div>

            <div className="forma">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your name" style={{boxSizing:'border-box'}}/>
                    <div className="inputs">
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Number" />
                    </div>
                    <textarea placeholder="Message" style={{boxSizing:'border-box'}}></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </main>
    );
}

export const Footer = () => {
        return (
            <footer style={{padding: '18px 25px', background: '#070c17', color: 'white' ,borderTop:'1px solid white'}}>
                <p>&copy; 2025 Saamkro N1. All rights reserved.</p>
            </footer>
        );
}

