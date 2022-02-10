import './about.css';
import Award from '../../images/award.png';
import MyPhoto from '../../images/my-photo-2.jpg';
import React from "react";

const About = () => {
    return ( 
        <div className="about" id='about'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                        src={MyPhoto} 
                        alt="" 
                        className='a-img'
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I'm a frontend developer that has an indept knowledge in React and Redux JS.
                </p>
            </div>
        </div>
        
     );
}
 
export default About;