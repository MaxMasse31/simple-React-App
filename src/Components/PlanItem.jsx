import CareScale from "./CareScale";
import "../style/ShoppingList.css";

function PlantItem({ id, cover, name, water, light }) {
  return (
    <>
      <li key={id} className="lmj-plant-item">
        <img
          className="lmj-plant-item-cover"
          src={cover}
          alt={`${name} cover`}
        />
        <span style={{ padding: "10px", fontWeight: "500" }}> {name}</span>
        <div>
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
        </div>
      </li>
    </>
  );
}

export default PlantItem;
