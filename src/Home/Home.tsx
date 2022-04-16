import React from 'react';
import s from './Home.module.css'
import style from '../common/styles/Container.module.css'

export const Home = () => {
    return (
        <div className={s.mainBlock}>
            <div className={style.container}>
                <div className={s.greetings}>
                    <span>Hi There</span>
                    <h1>I am Anatoly Rack</h1>
                    <span>Frontend Developer</span>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};
