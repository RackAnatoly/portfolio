import React from 'react';
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <h2>Contacts</h2>
                <form className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

