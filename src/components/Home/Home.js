import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='hero'>          
                <div className='heroText mx-5'>
                    <p>Hi there! I'm <br />
                    <span className='devName'><span className='nameColor'>Shams</span> Saif,</span> <br />
                    <span className='dev-des'>full-stack web developer</span> and <span className='dev-des'>designer</span> ready to create your dream website.</p>
                    <Link to="/works"><button className='worksBtn heroBtn'>Projects</button></Link>
                    <Link to="/contact"><button className='resumeBtn heroBtn'>Contact Me</button></Link>
                </div>
        </div>
    );
};

export default Home;