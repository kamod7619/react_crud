import React from "react";


let Card = ({image,name}) => {



    return (
        <div class="w3-card-4">
            <img src={image} className="w-100" alt="Alps"/>
            <div class="w3-container w3-center">
            <p className="p-2">{name}</p>
            </div>
        </div>
    )
}

export default Card;