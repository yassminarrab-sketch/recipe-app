import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import RecipeFilter from "./components/RecipeFilter";
import RecipeForm from "./components/RecipeForm";
import Aide from "./components/Aide";
import Pagination from "./components/Pagination";

export default function App() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      nom: "Tacos méditerranéens",
      categorie: "Plat",
      ingredients: ["Tortilla", "Poulet", "Tomate", "Feta"],
      difficulte: 4,
      description: "Tacos légers et parfumés.",
      image: "./images/pizza.webp",
    },
    {
      id: 2,
      nom: "Smoothie mangue",
      categorie: "Boisson",
      ingredients: ["Mangue", "Lait d'amande", "Miel"],
      difficulte: 1,
      description: "Boisson fraîche et fruitée.",
      image: "./images/brocolli.webp",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [idEdit, setIdEdit] = useState(null);
  const [nom, setNom] = useState("");
  const [categorie, setCategorie] = useState("Plat");
  const [ingredients, setIngredients] = useState([""]);
  const [difficulte, setDifficulte] = useState(3);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function deleteRecipe(id) {
    setRecipes(recipes.filter((item) => item.id !== id));
  }

  function duplicateRecipe(recipeToCopy) {
    const newRecipe = {
      ...recipeToCopy,
      id: Date.now(),
      nom: recipeToCopy.nom + " (Copie)",
    };
    setRecipes([...recipes, newRecipe]);
  }

  function openCreateModal() {
    setIdEdit(null);
    setNom("");
    setCategorie("Plat");
    setIngredients([""]);
    setDifficulte(0);
    setDescription("");
    setImage("");
    setShowModal(true);
  }

  function openEditModal(recipeToEdit) {
    setIdEdit(recipeToEdit.id);
    setNom(recipeToEdit.nom);
    setCategorie(recipeToEdit.categorie);
    setIngredients(recipeToEdit.ingredients);
    setDifficulte(recipeToEdit.difficulte);
    setDescription(recipeToEdit.description);
    setImage(recipeToEdit.image);
    setShowModal(true);
  }

  function changeIngredient(index, textTyped) {
    const copy = [...ingredients];
    copy[index] = textTyped;
    setIngredients(copy);
  }

  function addIngredientInput() {
    setIngredients([...ingredients, ""]);
  }

  function removeIngredientInput(indexToDelete) {
    const copy = ingredients.filter((index) => index !== indexToDelete);
    setIngredients(copy);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (nom === "") {
      alert("Le nom est obligatoire !");
    }

    const recipeData = {
      id: idEdit ? idEdit : Date.now(),
      nom,
      categorie,
      ingredients: ingredients,
      difficulte: difficulte,
      description,
      image: image ,
    };

    if (idEdit) {
      setRecipes(recipes.map((item) => (item.id === idEdit ? recipeData:null)));
    } else {
      setRecipes([...recipes, recipeData]);
    }

    setShowModal(false);
  }

  };

  return (
    <div>
      <div>
        <h1>Creative Recipe Builder</h1>
        <button
          onClick={openCreateModal}
          >
          + Créer une nouvelle recette
        </button>
      </div>

      <RecipeFilter
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <RecipeList
            recipes={filteredRecipes}
            onDelete={deleteRecipe}
            onDuplicate={duplicateRecipe}
            onEdit={openEditModal}
          />
          <Pagination />
        </div>
        <Aide />
      </div>

      <RecipeForm
        showModal={showModal}
        setShowModal={setShowModal}
        idEdit={idEdit}
        nom={nom}
        setNom={setNom}
        categorie={categorie}
        setCategorie={setCategorie}
        ingredients={ingredients}
        changeIngredient={changeIngredient}
        addIngredientInput={addIngredientInput}
        removeIngredientInput={removeIngredientInput}
        difficulte={difficulte}
        setDifficulte={setDifficulte}
        description={description}
        setDescription={setDescription}
        image={image}
        setImage={setImage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}