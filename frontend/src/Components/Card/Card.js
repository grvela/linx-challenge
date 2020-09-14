import React from 'react';


import './Card.css';

function Card({object, ...onclick}){

    return (
        <div className="container-centered link-item">
            <div id="url-item" className="title-Slab font-red" >
                <a {...onclick} href={"https://" + object.Link} rel="noopener noreferrer" target="_blank">{object.ShortLink}</a>
                </div>
            <div id="likes-item" className="title-Slab">{object.Hits}</div>
        </div>
    );

}

export default Card;