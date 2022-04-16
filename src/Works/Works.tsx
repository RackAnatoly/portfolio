import React from 'react';
import s from './Works.module.css'
import {Work} from "./Work/Work";

export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={s.worksContainer}>
                <h2 className={s.title}>My Works</h2>
                <div className={s.works}>
                    <Work/>
                    <Work/>
                    <Work/>
                </div>
            </div>


        </div>
    );
};

