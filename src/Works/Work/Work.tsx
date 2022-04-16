import React from 'react';
import s from './Work.module.css'

export const Work = () => {
    return (
        <div className={s.work}>
            <div className={s.icon}></div>
            <h3>watch</h3>
            <span className={s.description}>title</span>
            <span className={s.description}>description</span>
        </div>
    );
};

