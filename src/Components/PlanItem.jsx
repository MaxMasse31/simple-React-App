import CareScale from "./CareScale";
import "../style/PlanItem.css";

function PlantItem({ id, cover, name, water, light }) {
  const ActionClick = {
    handleClick: (e) => {
      console.log(e);
      alert(`Vous voulez acheter 1 ${name} ? Très bon choix 🌱✨`);
    },
  };

  return (
    <>
      <li key={id} className="lmj-plant-item" onClick={ActionClick.handleClick}>
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
