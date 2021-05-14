import React from 'react'
import './App.css';


const Recipe = ({title,calories,img,ingredients}) => {


return(
    <div className="recipe">
        <h1>{title}</h1>
        <p>{calories}</p>
        <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <img src={img} alt="img" />


    </div>
);

}



export default Recipe
