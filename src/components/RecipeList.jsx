import React from "react";
import RecipeItem from "./RecipeItem";

export default function RecipeItem({recipes,onDelete , onDuplicate,onEdit})
{

    return(
        <div>
            {recipes.map((recipe)=>(
                <RecipeItem key={recipe.id} recipe={recipe} onDelete={onDelete}
                onDuplicate={onDuplicate} onEdit={onEdit} />
            ))}
        </div>
    )
}