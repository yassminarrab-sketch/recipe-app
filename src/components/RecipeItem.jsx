import React from "react";

export default function RecipeItem({recipe,}){


    return(
        <div>
            <img src={recipe.image} alt='img'/>
            <div>

                <h3>{recipe.nom}</h3>
                <span>{recipe.categorie}</span>

            </div>

            <p>{recipe.description}</p>

            <div>

                {recipe.ingredients.map((ing,index)=>(
                    <span key={index}>{ing}</span>
                ))}
            </div>

            <div>
                <p> Difficulte:{recipe.difficulte}</p>
                
            </div>

            <div>

                <button onClick={} >modifier</button>
                <button onClick={} >dupliquer</button>
                <button onClick={} >supprimer</button>
            </div>
        </div>
    )
    
}