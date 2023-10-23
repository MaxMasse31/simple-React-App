import { nanoid } from "nanoid";

// quantité

const quantityLabel = {
  1: "peu ",
  2: "modérément",
  3: "beaucoup",
};

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3, 4];
  const scaleType = careType === "light" ? "☀️" : "💧";

  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]}
          ${careType === "light" ? "de lumière" : "d'arrosage"}`
        )
      }
    >
      {range.map((rangeElem) => {
        return scaleValue >= rangeElem ? (
          <span key={nanoid(10)}>{scaleType}</span>
        ) : null;
      })}
    </div>
  );
}

export default CareScale;
