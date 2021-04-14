import React from 'react';

export default function ChangeLanguage(props) {

    const setEnglish = () => {
        alert('English');
    } 

    const setPortuguese = () => {
        alert('Portuguese');
    }

    return (
        <div>
            <button onClick={() => setEnglish()}>English</button>
            <br />
            <button onClick={() => setPortuguese()}>Portuguese</button>
        </div>
    )

}


