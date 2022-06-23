import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <h3 className={s.white}>Follow me</h3>
                <div className={s.links}>
                    <div className={s.link}></div>
                    <div className={s.link}></div>
                    <div className={s.link}></div>
                    <div className={s.link}></div>
                </div>
                <h4 className={s.white}>2022 All Rights Reserved</h4>
            </div>
        </div>
    );
};
