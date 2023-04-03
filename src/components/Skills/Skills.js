import React from 'react';
import Menu from '../Menu/Menu';
import './Skills.css'

import {ImHtmlFive} from "react-icons/im";
import {SiCss3, SiFigma, SiFirebase, SiMongodb, SiReact, SiTailwindcss, SiWoocommerce} from "react-icons/si";
import {SiJavascript} from "react-icons/si";
import {FcPieChart} from "react-icons/fc";
import { FaElementor, FaNode } from 'react-icons/fa';
import { GrWordpress } from 'react-icons/gr';
import { BsFillBootstrapFill } from 'react-icons/bs';

const Skills = () => {
    return (
        <div className='skills'>
                <div className='sklTxtCont'>
                    <div className='line inline-block'></div> <p className='sklHeading inline-block ml-3'>My <span className='sklTxt'>Skills</span></p>
                </div>
                <div className='sklIconTxt grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                    <div className='mb-5'>
                        <ImHtmlFive className='sklIcon text-orange-600'></ImHtmlFive>
                        <p>HTML</p>
                    </div>
                    <div className='mb-5'>
                        <SiCss3 className='sklIcon text-blue-700'></SiCss3>
                        <p>CSS3</p>
                    </div>
                    <div className='mb-5'>
                        <SiJavascript className='sklIcon text-amber-300'></SiJavascript>
                        <p>JavaScript</p>
                    </div>
                    <div className='mb-5'>
                        <SiReact className='sklIcon text-cyan-400'></SiReact>
                        <p>React JS</p>
                    </div>
                    <div className='mb-5'>
                        <FaNode className='sklIcon text-lime-400	'></FaNode>
                        <p>Node JS</p>
                    </div>
                    <div className='mb-5'>
                        <SiFirebase className='sklIcon text-orange-600'></SiFirebase>
                        <p>Firebase</p>
                    </div>
                    <div className='mb-5'>
                        <SiMongodb className='sklIcon text-green-400'></SiMongodb>
                        <p>MongoDB</p>
                    </div>
                    <div className='mb-5'>
                        <SiTailwindcss className='sklIcon text-sky-500'></SiTailwindcss>
                        <p>Tailwind</p>
                    </div>
                    <div className='mb-5'>
                        <BsFillBootstrapFill className='sklIcon text-violet-500	'></BsFillBootstrapFill>
                        <p>Bootstrap</p>
                    </div>
                    <div className='mb-5'>
                        <FcPieChart className='sklIcon'></FcPieChart>
                        <p>Recharts</p>
                    </div>
                    <div className='mb-5'>
                      <SiFigma className='sklIcon  text-pink-500'></SiFigma>
                      <p>Figma</p>
                    </div>
                    <div className='mb-5'>
                        <GrWordpress className='sklIcon text-sky-500'></GrWordpress>
                        <p>WordPress</p>
                    </div>
                    <div className='mb-5'>
                        <SiWoocommerce className='sklIcon text-violet-600'></SiWoocommerce>
                        <p>WooCommerce</p>
                    </div>
                    <div className='mb-5'>
                      <FaElementor className='sklIcon text-rose-600'></FaElementor>
                      <p>Elementor</p>
                    </div>
                </div>
        </div>
    );
};

export default Skills;