import React from 'react';
import './Works.css';
import project1 from '../Img-icon/project1.png';
import project2 from '../Img-icon/project2.png';
import project3 from '../Img-icon/project3.png';
import project4 from '../Img-icon/project4.png';
import project6 from '../Img-icon/project6.png';
import project7 from '../Img-icon/project7.png';
import project8 from '../Img-icon/project8.png';
import project9 from '../Img-icon/project9.png';
import project10 from '../Img-icon/project10.png';
import realproject1 from '../Img-icon/realproject1.png';
import {GiPlainCircle} from "react-icons/gi";

const Works = () => {
    return (
        <div className='works'>
            <div className='line inline-block'></div>
            <p className='sklHeading inline-block ml-3'> Explore My <span className='sklTxt'>Projects</span></p>
            
            <div className="workBoard">
                <div className='mb-10'>
                    <p className='rcntwork mb-4'> <GiPlainCircle className='inline-block text-emerald-400 mb-1'></GiPlainCircle> Recently Worked</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                        <div className='prjct'>
                            <img className='prjctImg' src={realproject1} alt="project1" />
                            <a href='http://thecounsellingservices.co.uk/' target="_blank" rel='noopener noreferrer'><button className='rcntLiveBtn'>Live</button></a>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='rcntwork mb-4'> <GiPlainCircle className='inline-block text-orange-500	mb-1'></GiPlainCircle> Sample Projects</p>
                    <div className='projectDetails grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2'>
                        <div className='prjct'>
                            <p><strong>ChatGPT Clone - OpenAI API</strong></p>
                            <img className='prjctImg' src={project9} alt="project1" />
                            <a href='https://chatgpt-pi-amber.vercel.app/' target="_blank" rel='noopener noreferrer'><button className="prjctBtn liveBtn" >Live</button></a>
                            <a href='https://github.com/Webdev-Shams/chatgpt' target="_blank" rel='noopener noreferrer'><button className="prjctBtn codeBtn" >Code</button></a>
                        </div>

                        <div className='prjct'>
                            <p><strong>Full-Stack app - React.js, MongoDB and Node.js</strong></p>
                            <img className='prjctImg' src={project10} alt="project1" />
                            <a href='https://symphonious-treacle-f67697.netlify.app/' target="_blank" rel='noopener noreferrer'><button className="prjctBtn liveBtn" >Live</button></a>
                            <a href='https://github.com/Webdev-Shams/car-stock-client-side' target="_blank" rel='noopener noreferrer'><button className="prjctBtn codeBtn" >Code</button></a>
                        </div>

                        <div className='prjct'>
                            <p><strong>Authentication system - React.js and Firebase</strong></p>
                            <img className='prjctImg' src={project3} alt="project1" />
                            <a href='https://photographer-website-35e3d.firebaseapp.com/' target="_blank" rel='noopener noreferrer'><button className="prjctBtn liveBtn" >Live</button></a>
                            <a href='https://github.com/Webdev-Shams/photography-website' target="_blank" rel='noopener noreferrer'><button className="prjctBtn codeBtn" >Code</button></a>
                        </div>

                        <div className='prjct'>
                            <p><strong>Fetch Data Functionality - React.js</strong></p>
                            <img className='prjctImg' src={project8} alt="project1" />
                            <a href='https://subtle-crisp-77e047.netlify.app/' target="_blank" rel='noopener noreferrer'><button className="prjctBtn liveBtn" >Live</button></a>
                            <a href='https://github.com/Webdev-Shams/keyboard-review' target="_blank" rel='noopener noreferrer'><button className="prjctBtn codeBtn" >Code</button></a>
                        </div>

                        <div className='prjct'>
                            <p><strong>Search Functionality -HTML, CSS and JavaScript</strong></p>
                            <img className='prjctImg' src={project2} alt="project1" />
                            <a href='https://elegant-fermat-54fbb2.netlify.app/' target="_blank" rel='noopener noreferrer'><button className="prjctBtn liveBtn" >Live</button></a>
                            <a href='https://github.com/Webdev-Shams/phone-hunter' target="_blank" rel='noopener noreferrer'><button className="prjctBtn codeBtn" >Code</button></a>
                        </div>
                        
                        <div className='prjct'>
                            <p><strong>Simple Calculator - HTML, CSS and JavaScript</strong></p>
                            <img className='prjctImg' src={project4} alt="project1" />
                            <a href='https://eloquent-wiles-b9a0e1.netlify.app/' target="_blank" rel='noopener noreferrer'><button className="prjctBtn liveBtn" >Live</button></a>
                            <a href='https://github.com/Webdev-Shams/simple-money-planner' target="_blank" rel='noopener noreferrer'><button className="prjctBtn codeBtn" >Code</button></a>
                        </div>
                        
                        <div className='prjct'>
                            <p><strong>Static website - HTML, CSS and Bootstrap</strong></p>
                            <img className='prjctImg' src={project1} alt="project1" />
                            <a href='https://superlative-blini-796175.netlify.app/' target="_blank" rel='noopener noreferrer'><button className="prjctBtn liveBtn" >Live</button></a>
                            <a href='https://github.com/Webdev-Shams/bootstrap-convention-center' target="_blank" rel='noopener noreferrer'><button className="prjctBtn codeBtn" >Code</button></a>
                        </div>
                        
                        <div className='prjct'>
                            <p><strong>Responsive Onepage Site - HTML and CSS</strong></p>
                            <img className='prjctImg' src={project6} alt="project1" />
                            <a href='https://webdev-shams.github.io/influencer-gear/' target="_blank" rel='noopener noreferrer'><button className="prjctBtn liveBtn" >Live</button></a>
                            <a href='https://github.com/Webdev-Shams/influencer-gear' target="_blank" rel='noopener noreferrer'><button className="prjctBtn codeBtn" >Code</button></a>
                        </div>
                        <div className='prjct'>
                            <p><strong>Responsive Portfolio Website - HTML and CSS</strong></p>
                            <img className='prjctImg' src={project7} alt="project1" />
                            <a href='https://webdev-shams.github.io/developer-portfolio/' target="_blank" rel='noopener noreferrer'><button className="prjctBtn liveBtn" >Live</button></a>
                            <a href='https://github.com/Webdev-Shams/developer-portfolio' target="_blank" rel='noopener noreferrer'><button className="prjctBtn codeBtn" >Code</button></a>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;