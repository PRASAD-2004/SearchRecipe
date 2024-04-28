import React from "react";

const Recipe = (props) => {
    
    const { id, title ,image} = props.data;

    return (
        <div className="card">

            <img src={image} alt={title} />
            <h1>{title}</h1>

        </div>

    );
};

export default Recipe;

