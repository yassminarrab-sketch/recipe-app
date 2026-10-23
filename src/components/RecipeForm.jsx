import React,{useState,} from "react";

export default function recipeForm(showModal,setShowModal,idEdit,nom,setNom,categorie,setCategorie,ingredients,changeIngredient,addIngredientInput,removeIngredientInput,difficulte,setDifficulte,description,setDescription,image,setImage,handleSubmit){

    if(!showModal) return null;
    

    return (
    <div>
      
        <div>
          <h2>{idEdit ? "Modifier la recette":"Nouvelle recette"}</h2>
        </div>

        <form onSubmit={handleSubmit} >
          <label>Nom</label>
          <input  value={nom} onChange={(e) => setNom(e.target.value)}/>

          <label>Catégorie</label>
          <select value={categorie} onChange={(e) => setCategorie(e.target.value)} >
            <option value="Entrée">Entrée</option>
            <option value="Plat">Plat</option>
            <option value="Dessert">Dessert</option>
            <option value="Boisson">Boisson</option>
          </select>

          <label>Ingrédients :</label>
          {ingredients.map((ing, index) => (
            <div>
                <input
                type="text"
                value={ing}
                onChange={(e) => changeIngredient(index, e.target.value)}
                />
                <button type="button" onClick={(index) => removeIngredientInput(index)}>X</button>
            
            </div>))}
            <button type="button" onClick={addIngredientInput}>+ Ajouter ingrédient</button>

            <label>Difficulté (1 à 5) :</label>
            <input type="number" value={difficulte} onChange={(e) => setDifficulte(e.target.value)} />
             
            <label>Description :</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

            <label>Image URL :</label>
            <input value={image} onChange={(e) => setImage(e.target.value)} />


            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button type="submit" >Enregistrer</button>
            <button type="button" onClick={() => setShowModal(false)} >Annuler</button>
          </div>
    
          
        </form>
    </div>
    )
}
