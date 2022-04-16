import React from 'react';
import s from './Skills.module.css'
import c from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    let htmlCssDescription = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam architecto aspernatur commodi deleniti eius, hic id ipsa omnis optio provident quaerat quam qui quo reiciendis sequi tempora tenetur vel?'
    let jsDescription = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam architecto aspernatur commodi deleniti eius, hic id ipsa omnis optio provident quaerat quam qui quo reiciendis sequi tempora tenetur vel?'
    let reactDescription = ' Lorem  dolor sit amet, consectetur adipisicing elit. Accusantium aliquam architecto aspernatur commodi deleniti eius, hic id ipsa omnis optio provident quaerat quam qui quo reiciendis sequi tempora tenetur vel?'
    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML/CSS'} description={htmlCssDescription}/>
                    <Skill title={'Javascript'} description={jsDescription}/>
                    <Skill title={'React'} description={reactDescription}/>
                    <Skill title={'React'} description={reactDescription}/>
                </div>
            </div>
        </div>
    );
};
