import React from "react";


const CardActor = props => {
    return(
        <td>
            <h3>{props.name}</h3>
            <img src={props.pictureUrl}/>
            <p>{props.popularity}</p>
        </td>
    )
}

export default CardActor;