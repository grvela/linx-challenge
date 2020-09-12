import React from 'react';


import './Card.css';

function Card(){
    return (
        <div className="container-centered link-item">
            <div id="url-item" className="title-Slab font-red" >https://chrome.by.com</div>
            <div id="likes-item" className="title-Slab">7.999</div>
        </div>
    );

}

export default Card;