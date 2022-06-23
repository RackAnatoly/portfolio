import React from 'react';
import s from './Hire.module.css'
import c from '../common/styles/Container.module.css'

export const Hire = () => {
    return (
        <div className={s.hireBlock}>
            <div className={s.container}>
                <div className={s.head}>
                    <h2 className={s.back}>Hire me</h2>
                    <p className={s.front}>Considering remote work</p>
                </div>
                <div>
                    <a href=''>Hire me</a>
                </div>

            </div>
        </div>
    );
};
