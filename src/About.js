import React from 'react';
import './About.css';
import MSPlogo from './images/micro.png';
import tcsLogo from './images/tcs.png';
import prag from './images/pragati.jpeg'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


function About() {
    return (
        <section id='about'>
            <div className='education'>
                <div className='col_header'>
                    <h1><span>Education</span></h1>
                </div>
                <div className='edu_higher'>
                    <h3>Pragati Engineering College</h3>
                    <p><em>Bachelors of Technology,<br/>Electronics and Comunication Engineering</em></p>
                    <strong><p>May 2019</p></strong>
                </div>
                <div className='edu_higher'>
                    <h3>Sasi Junior College</h3>
                    <p><em>Higher Secondary Education,<br/>Maths Physics Chemistry (MPC)</em></p>
                    <strong><p>May 2015</p></strong>
                </div>
                <div className='edu_higher'>
                    <h3>Sri Prakash Vidhya Nikethan</h3>
                    <p><em>Secondary Education,</em></p>
                    <strong><p>May 2013</p></strong>
                </div>
            </div>

            <div className='work'>
                <div className='work_header'>
                    <h1><span>work</span></h1>
                </div>
                <div className='work_details'>
                    <div class="work-details-container">
                        <a href="https://www.tcs.com/" target='_blank'>
                            <img
                                src={tcsLogo}
                                alt="tcs"
                            />
                        </a>
                        <h3>Tata Consultancy Services</h3>
                    </div>
                    <p><strong>Role: </strong>Application Developer</p>
                    <p><strong>Proficiency: </strong>Core Java, Spring Boot, Restful Web sercices, J2EE</p>
                    <strong><p>January 2020 - Present</p></strong>
                </div>
                <div className='work_details'>
                    <div class="work-details-container">
                        <a href="https://studentambassadors.microsoft.com/" target='_blank'>
                            <img
                                src={MSPlogo}
                                alt="MSP"
                            />
                        </a>
                        <h3>Microsoft Student Partner</h3>
                    </div>
                    <p><strong>Role: </strong>Student Ambassador</p>
                    <strong><p>June 2017 - July 2018</p></strong>
                </div>
            </div>
            
        </section>
    )
}

export default About;