import React from 'react';
import s from './About.module.css'

export const About = () => {
        return (
            <div className={s.about}>
                <div className={s.container}>
                    <div className={s.head}>
                        <h2 className={s.back}>About me</h2>
                        <p className={s.front}>Know Me More</p>
                    </div>
                    <h3>I'm Anatoly Rack, a Web Developer</h3>
                    <div className={s.text}>
                        I help you build brand for your business at an affordable price. Thousands of clients have procured
                        exceptional results while working with our dedicated team. when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                        Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum
                        has been the industry's standard dummy text ever when an unknown printer took a galley.
                    </div>
                    <div className={s.summary}>
                        <ul>
                            <li>Name:Anatoly Rack</li>
                            <li>Email:rack.anatoly@gmail.com</li>
                            <li>Age:33</li>
                            <li>From:Gdansk,Poland</li>
                        </ul>
                        <div>
                            <button>Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
;
