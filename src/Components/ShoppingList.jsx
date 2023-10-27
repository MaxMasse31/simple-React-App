import React, { useState } from "react";
import { plantList } from "../Data/planteData";
import "../style/ShoppingList.css";
// import CareScale from './CareScale';
import PlantItem from "./PlanItem";

const formStyle = {
  width: "100%",
  maxWidth: "500px",
  marginTop: "30px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  background: "#f4f4f4",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const selectStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  margin: "10px 0",
  position: "relative",
  display: "block",
};

const itemContenu = {
  display: "flex",
  alignItems: "center",
};

function ShoppingList({ cart, updateCart }) {
  const [selectedCategory, setSelectedCategory] = useState("classique");

  const handleSelectionChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Utilisation de filter pour filtrer les plantes en fonction de la catégorie sélectionnée
  // const filteredPlants = plantList.filter(
  //   (plant) => plant.category === selectedCategory
  // );

  const categories = [];
  plantList.forEach((plant) => {
    if (!categories.includes(plant.category)) {
      categories.push(plant.category);
    }
  });

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <form name="form1" action="" method="get" style={formStyle}>
        <label htmlFor="listeSelection">Sélectionnez une catégorie :</label>
        <select
          id="listeSelection"
          name="listeSelection"
          value={selectedCategory}
          onChange={handleSelectionChange}
          style={selectStyle}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </form>

      <ul style ={{ margin: "0 auto",}}className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !selectedCategory || selectedCategory === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button
                 style={{
                  backgroundColor: "#4CAF50", // Couleur de fond
                  color: "white", // Couleur du texte
                  padding: "10px 20px", // Rembourrage
                  border: "none", // Supprimer la bordure
                  borderRadius: "5px", // Coins arrondis
                  cursor: "pointer", // Curseur de la souris
                  display: "block", // Utilisation de flexbox
                  margin: "10px",
                
                  width: "120px",
                }}
                onClick={() => addToCart(name, price)}
              >
                Ajouter
              </button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
