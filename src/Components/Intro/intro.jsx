import React from 'react';
import './intro.css';
import bg from '../../assets/yash.jpg';
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';
function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">Yash</span><br />Web Developer</span>
            <p className="introPara">Motivated web developer with a strong passion for creating dynamic,<br/>
             user-centered websites.Eager to contribute to impactful projects.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro
