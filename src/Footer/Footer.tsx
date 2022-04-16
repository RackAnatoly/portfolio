import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <h3>Anatoly Rack</h3>
                <div className={s.links}>
                    <div className={s.link}></div>
                    <div className={s.link}></div>
                    <div className={s.link}></div>
                    <div className={s.link}></div>
                </div>
                <div>2022 All Rights Reserved</div>
            </div>
        </div>
    );
};
