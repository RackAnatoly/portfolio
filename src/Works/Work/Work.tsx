import React from 'react';
import s from './Work2.module.scss'

type WorkType = {
    title: string
    description: string
    style: any
}
export const Work = (props: WorkType) => {
    return (
        // <div className={s.work} >
        //     <div className={s.icon} style={props.style}>
        //         <a href='' className={s.view}>watch</a>
        //     </div>
        //     <h3 className={s.title}>{props.title}</h3>
        //     <span className={s.description}>{props.description}</span>
        // </div>
        <div className={s.main}>
            <div className={`${s.flip} ${s.flipVertical}`}>
                <div className={s.front}
                     style={props.style}>
                    <h1 className={s.textShadow}></h1>
                </div>
                <div className={s.back}>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <a href="">Link</a>
                </div>
            </div>
        </div>
    );
};

