import React from 'react';
import s from './Skill.module.css'

type SkillProps = {
    title: string
    description: string
}
export const Skill = (props: SkillProps) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <div>
                <h3>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};
