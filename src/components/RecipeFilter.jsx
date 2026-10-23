import React from "react";

export default function RecipeFilter({SearchTerm,SelectedCategory})
{

    return(
        <div>
            
            <input value={SearchTerm} onChange={(e)=>setSearchTerm(e.target.value)}></input>
            <select value={SelectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)}>

                <option value=''>toutes le scategories</option>
                <option value='Entree'>entree</option>
                <option value='Plat'>plat</option>
                <option value='Dessert'>dessert</option>
                <option value='Boisson'>boisson</option>
            </select>

        </div>
    )
}