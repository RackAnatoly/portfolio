import React from 'react';
import s from './Works.module.css'
import {Work} from "./Work/Work";

export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={s.worksContainer}>
                <div className={s.titles}>
                    <h2 className={s.back}>Portfolio</h2>
                    <p className={s.front}>My Projects</p>
                </div>
                <div className={s.works}>
                    <Work title={"Social network"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deserunt dignissimos dolor doloremque eligendi impedit iure laborum necessitatibus nihil nisi, obcaecati officia omnis optio sit soluta. Beatae libero obcaecati quod."}/>
                    <Work title={"Todolist"} description={"Lorem"}/>
                </div>
            </div>


        </div>
    );
};

