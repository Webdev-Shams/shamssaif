import React from 'react';
import './About.css';
import webdevshams from '../Img-icon/webdevshams.jpg';

const About = () => {
    return (
        <div className='about2'>
            <div className='about'>
                <div className='shamssaifPic'>
                    <img src={webdevshams} alt="shamssaif" />
                </div>
                <div className='mt-5'>
                    <div className='sklTxtCont'>
                    <div className='line inline-block'></div>
                    <p className='sklHeading inline-block ml-3'> <span className='sklTxt'>About</span> Me</p>
                    </div>
                    <div className='aboutPara'>
                        <p>I'm a <span className='dev-des'>full-stack web developer</span> and <span className='dev-des'>designer</span>. I work as a full time freelancer at Fiverr. For the past 3 years, I have been working as a web developer. Over these years gained so much experience. I am good at coding problem solving and time makes me more and more interest to dive deeper into this sector. I am passionate about my work. I have working experience of building almost all type of websites.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;