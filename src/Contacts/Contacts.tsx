import React from 'react';
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <div className={s.head}>
                    <h2 className={s.back}>Contact</h2>
                    <p className={s.front}>Get in Touch</p>
                </div>
                <h2 className={s.preForm}>Send me a note</h2>
                <form className={s.form}>
                    <input name="name" type="text" placeholder={"Name"}/>
                    <input name="email" type="text" placeholder={"Email"}/>
                    <textarea name="form-message" className="form-control" rows={5}
                              placeholder={"Tell us more about your needs........"}></textarea>
                    <button className={s.btn}>Send</button>
                </form>
            </div>
        </div>
    );
};

