import React from 'react';
import s from './Work.module.scss'

type WorkType={
    title:string
    description:string
    style:any
}
export const Work = (props:WorkType) => {
    return (
        <div className={s.work} >
            <div className={s.icon} style={props.style}>
                <a href='' className={s.view}>watch</a>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

