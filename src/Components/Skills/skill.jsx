import React from 'react';
import './skills.css';
import Internshala from '../../assets/Internshala.png'
import Udemy from '../../assets/Udemy.jpg'
function Skill() {
  return (
    <section id='skills'>
        <span className='skillTitle'>CERTIFICATIONS</span>
        <div className="skillsBars">
            <div className="skillBar">
                <img src={Internshala} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Development</h2>
                    <p>The training consisted of HTML, CSS, Bootstrap, DBMS, PHP, JS, React, and Final Project modules. </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Udemy} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Complete ReactJS and ReduxJS Course</h2>
                    <p>The cousre consisted of Components, JSX (JavaScript XML), State and Props, Handling Events, Conditional Rendering, React Hooks, React Router, Context API,Reducers,Async Actions,Redux Toolkit.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill
