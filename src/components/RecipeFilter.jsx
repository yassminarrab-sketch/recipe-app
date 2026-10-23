import React from "react";

export default function RecipeFilter({search,setSearch,SelectedCategory,setSelectedCategory})
{

    return(
        <div>
            
            <input value={Search} onChange={(e)=>setSearch(e.target.value)}></input>
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