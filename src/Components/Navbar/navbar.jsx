import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';
function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className='DesktopMenuListItem'>Home</Link>
            <Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-19} duration={500} className='DesktopMenuListItem'>Certifications</Link>
            <Link activeClass='active' to ='contactPage' spy={true} smooth={true} offset={-67} duration={500} className='DesktopMenuListItem'>Contact Info</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }}>
           <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
        </button>
    </nav>
  )
}

export default Navbar;
