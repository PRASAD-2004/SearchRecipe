import React from "react";

const Recipedetails = ({ data }) => {


    if (!data){
        return null
    }
    const {id, title,image, ingredients, preparation } = data;

    return (

        <div style={{display:"flex",margin:"40px"}}>

            <div className="card">

            <img src={image} alt={title} />
            <h1>{title}</h1>

            </div>

            <div style={{backgroundColor:'white', border:'2px black solid', borderRadius:'10px'}}>
                <h1>Ingredients:</h1>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>

                <h1>Preparation:</h1>
                <ol>
                    {preparation.map((step,index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Recipedetails;
