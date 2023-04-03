import React from 'react';
import { SiMinutemailer } from 'react-icons/si';
import { RiMessage2Fill, RiPhoneFill } from 'react-icons/ri';
import './Contact.css';
import fiverrlogo from '../Img-icon/fiverrlogo.png';
import linklogo from '../Img-icon/linklogo.png';
import gitlogo from '../Img-icon/gitlogo.png';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='line inline-block'></div>
            <p className='sklHeading inline-block ml-3'> <span className='sklTxt'>Contact</span> Me</p>
            <div className="newContInfo mt-10">
                <p className='rcntwork underline'><SiMinutemailer className='inline-block text-orange-500 contIcon'></SiMinutemailer>Mail Me at:</p>
                <p className='ml-8 mb-4'>webdev.shams@gmail.com</p>
                <p className='rcntwork underline'><RiPhoneFill className='inline-block text-orange-500 contIcon'></RiPhoneFill>Phone Number:</p>
                <p className='ml-8 mb-4'>01874224558</p>
                <p className='rcntwork underline mb-2'><RiMessage2Fill className='inline-block text-orange-500 contIcon'></RiMessage2Fill>Connect with Me</p>
                <a href='https://www.fiverr.com/shams_01' target="_blank" rel='noopener noreferrer'><img className='inline-block cmplogo ml-8 mr-4' src={fiverrlogo} alt="fiverrlogo" /></a>
                <a href="https://www.linkedin.com/in/shamssaif/" target="_blank" rel='noopener noreferrer'><img className='inline-block cmplogo mr-4' src={linklogo} alt="linklogo" /></a>
                <a href="https://github.com/Webdev-Shams" target="_blank" rel='noopener noreferrer'><img className='inline-block cmplogo mr-4 gitlogo' src={gitlogo} alt="githublogo" /></a>
            </div>
        </div>
    );
};

export default Contact;