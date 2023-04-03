import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';
import portlogo from '../Img-icon/portlogo.png'
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { BsFilePersonFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const MobileMenu = () => {
    return (
        <div className='mblNavBar fixed pt-10'>
            <div className='mblNavLogo'>
                <Link to="/"><img src={portlogo} alt="webdev-shamssaiflogo" /></Link>
            </div>
            <div className='mblNavItems mx-auto'>
                <div className='mblNavItemsIcons mx-auto'>
                    <Link to="/home" ><span className='mblIconNavbar'><AiFillHome></AiFillHome></span></Link>
                    <Link to="/about"><span className='mblIconNavbar'><BsFilePersonFill></BsFilePersonFill></span></Link>
                    <Link to="/skills"><span className='mblIconNavbar'><FaBrain></FaBrain></span></Link>
                    <Link to="/works"><span className='mblIconNavbar'><MdWork></MdWork></span></Link>
                    <Link to="/contact"><span className='mblIconNavbar'><AiFillPhone></AiFillPhone></span></Link>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;