import React from 'react';
import s from './Hire.module.css'
import c from '../common/styles/Container.module.css'

export const Hire = () => {
    return (
        <div className={s.hireBlock}>
            <div className={s.container}>
                <h2>Considering remote work</h2>
                <div>
                    <button>Hire me</button>
                </div>

            </div>
        </div>
    );
};
