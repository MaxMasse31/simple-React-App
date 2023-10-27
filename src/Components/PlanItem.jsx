import CareScale from "./CareScale";
import "../style/PlanItem.css";

function PlantItem({ id, cover, name, water, light,price }) {
  const ActionClick = {
    handleClick: (e) => {
      console.log(e);
      alert(`Vous voulez acheter 1 ${name} ? Très bon choix 🌱✨`);
    },
  };

  return (
    <>
      <li key={id} className="lmj-plant-item" onClick={ActionClick.handleClick}>
      <span className='lmj-plant-item-price'>{price}€</span>
        <img
          className="lmj-plant-item-cover"
          src={cover}
          alt={`${name} cover`}
        />
        <span style={{ padding: "10px", fontWeight: "500" }}>{name}</span>
        <div style={{ padding: "3px 10px", fontWeight: "500" }}>
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
        </div>
      </li>
    </>
  );
}

export default PlantItem;
