import React from "react";

const ApodCard = (props) => {
    return (
        
        <div key={props.id}>
            <h2>{props.date}</h2>
            <img src={props.imgUrl} alt="NASA" />
            <h2>{props.title}</h2>
            <p>{props.explain}</p>
        </div>


    )
}

export default ApodCard; 