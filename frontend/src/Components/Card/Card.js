import React from 'react';


import './Card.css';

function Card({link, hits}){
    return (
        <div className="container-centered link-item">
            <div id="url-item" className="title-Slab font-red" >{link}</div>
            <div id="likes-item" className="title-Slab">{hits}</div>
        </div>
    );

}

export default Card;