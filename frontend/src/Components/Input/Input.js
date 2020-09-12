import React from 'react'

import './Input.css';

function Input(){
    return(
        <form className="submit-link">
            <input id="url-input" placeholder="Cole o seu link aqui"></input>
            <button id="submit-button"><h3 className="article-Roboto">ENCURTAR</h3></button>
        </form>
    );

}

export default Input;