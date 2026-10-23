import React from "react";
import RecipeItem from "./RecipeItem";

export default function RecipeItem({recipes,})
{

    return(
        <div>
            {recipes.map((recipe)=>(
                <RecipeItem key={recipe.id} recipe={recipe} />
            ))}
        </div>
    )
}