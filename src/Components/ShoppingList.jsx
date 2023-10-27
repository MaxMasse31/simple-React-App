import React, { useState } from "react";
import { plantList } from "../Data/planteData";
import "../style/ShoppingList.css";
// import CareScale from './CareScale';
import PlantItem from "./PlanItem"



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

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("classique");

  const handleSelectionChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Utilisation de filter pour filtrer les plantes en fonction de la catégorie sélectionnée
  const filteredPlants = plantList.filter(
    (plant) => plant.category === selectedCategory
  );

  const categories = [];
  plantList.forEach((plant) => {
    if (!categories.includes(plant.category)) {
      categories.push(plant.category);
    }
  });

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

      <ul className="lmj-plant-list">
        {filteredPlants.map(({ id, cover, name, water, light }) => (
          <PlantItem
          id={id}
          cover={cover}
          name={name}
          water={water}
          light={light}
        />
        
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
