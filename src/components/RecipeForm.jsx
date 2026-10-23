import React,{useState,} from "react";

export default function recipeForm(){
    const [nom, setNom] = useState('');
    const [categorie, setCategorie] = useState('Plat');
    const [ingredients, setIngredients] = useState(['']); 
    const [difficulte, setDifficulte] = useState(3);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(''); 

    return (
    <div>
      <div >
        <div>
          <h2>{currentRecipe ? "Modifier la recette" : "Nouvelle recette"}</h2>
          <button onClick={}>Fermer</button>
        </div>

        <form onSubmit={handleSubmit} >
          <label>Nom</label>
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)}/>

          <label>Catégorie</label>
          <select value={categorie} onChange={(e) => setCategorie(e.target.value)} >
            <option value="Entrée">Entrée</option>
            <option value="Plat">Plat</option>
            <option value="Dessert">Dessert</option>
            <option value="Boisson">Boisson</option>
          </select>

          
        </form>
}