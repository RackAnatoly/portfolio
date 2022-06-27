import React from 'react';
import s from './About.module.scss'

export const About = () => {
        return (
            <div className={s.about}>
                <div className={s.container}>
                    <div className={s.head}>
                        <h2 className={s.back}>About me</h2>
                        <p className={s.front}>Know Me More</p>
                    </div>
                    <div className={s.description}>
                        <div className={s.info}>
                            <h2>I'm <span className={s.primary}>Anatoly Rack,</span> a Web Developer</h2>
                            <p className={s.text}>
                                I'am Front-End developer with experience and good knowledge in creating and optimization SPA using React, Redux ,HTML,CSS, JS and accompanying technologies.
                                Now, i have seeking a front-end developer trainee position with a company which will require me to improve my skills, abilities in the IT field to ensure the company's success.
                                Ready to consider project work and full-time employment.
                                My free time is dedicated to Codewars, learning new technologies, and impove my English language skills.
                            </p>
                        </div>
                        <div className={s.contact}>
                            <div className={s.summary}>
                                <ul>
                                    <li> <span className={s.me}>Name:</span> Anatoly Rack</li>
                                    <li><span className={s.me}>Email:</span>rack.anatoly@gmail.com</li>
                                    <li><span className={s.me}>Age:</span>33</li>
                                    <li><span className={s.me}>From:</span>Gdansk,Poland</li>
                                </ul>
                                <div>
                                    <button>Download CV</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
;
