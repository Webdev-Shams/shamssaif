import React, { useEffect, useState } from 'react';
import './Menu.css'
import portlogo from '../Img-icon/portlogo.png'
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { BsFilePersonFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { MdWork } from "react-icons/md";
const Menu = () => {
    
    return (
        <div className='navBar fixed pt-10'>
            <div className='navLogo'>
                <Link to="/"><img src={portlogo} alt="webdev-shamssaiflogo" /></Link>
            </div>
            <div className='navItems mx-auto'>
                <div className='navItemsIcons mx-auto'>
                    <Link to="/home" ><span className='iconNavbar'><AiFillHome></AiFillHome></span></Link>
                    <Link to="/about"><span className='iconNavbar'><BsFilePersonFill></BsFilePersonFill></span></Link>
                    <Link to="/skills"><span className='iconNavbar'><FaBrain></FaBrain></span></Link>
                    <Link to="/works"><span className='iconNavbar'><MdWork></MdWork></span></Link>
                    <Link to="/contact"><span className='iconNavbar'><AiFillPhone></AiFillPhone></span></Link>
                    
                </div>
                <div className='navItemsNames'>
                    <Link to="/home"><span className='iconNavbar'><p className='itemNavbar'>Home</p></span></Link>
                    <Link to="/about"><span className='iconNavbar'><p className='itemNavbar'>About</p></span></Link>
                    <Link to="/skills"><span className='iconNavbar'><p className='itemNavbar'>Skills</p></span></Link>
                    <Link to="/works"><span className='iconNavbar'><p className='itemNavbar'>Works</p></span></Link>
                    <Link to="/contact"><span className='iconNavbar'><p className='itemNavbar'>Contact</p></span></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Menu;