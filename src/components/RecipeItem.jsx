import React from "react";

export default function RecipeItem({recipe,onDelete,onDuplicate,onEdit}){


    return(
        <div>
            <img src={recipe.image} alt='img'/>
            <div>

                <h3>{recipe.nom}</h3>
                <span>categorie:{recipe.categorie}</span>

            </div>

            <p>{recipe.description}</p>

            <div>

                ingredient: {recipe.ingredients.map((ing,index)=>(
                    <span key={index}>{ing}</span>
                ))}
            </div>

            <div>
                <p> Difficulte:{recipe.difficulte}</p>
                
            </div>

            <div>

                <button onClick={()=>onEdit(recipe)} >modifier</button>
                <button onClick={()=>onDuplicate(recipe)} >dupliquer</button>
                <button onClick={()=>onDelete(recipe.id)} >supprimer</button>
            </div>
        </div>
    )
    
}