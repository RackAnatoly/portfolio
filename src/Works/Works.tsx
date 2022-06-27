import React from 'react';
import s from './Works.module.scss'
import {Work} from "./Work/Work";
import todo from '../assets/images/todolist.png'
import socialNetwork from '../assets/images/social-network-app.png'


export const Works = () => {
    const social = {
        color: 'white',
        backgroundImage: 'url(' + socialNetwork + ')',
    };
    const todolist = {
        color: 'white',
        backgroundImage: 'url(' + todo + ')',
    };

    return (
        <div className={s.worksBlock}>
            <div className={s.worksContainer}>
                <div className={s.titles}>
                    <h2 className={s.back}>Portfolio</h2>
                    <p className={s.front}>My Projects</p>
                </div>
                <div className={s.works}>
                    <Work style={social} title={"Social network"}
                          description={"Lorem ipsum doBeatae libero obcaecati quod."}/>
                    <Work style={todolist} title={"Todolist"} description={"Lorem"}/>
                </div>
            </div>


        </div>
    );
};

