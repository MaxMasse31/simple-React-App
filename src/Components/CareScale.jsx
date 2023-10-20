import { nanoid } from "nanoid";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3, 4];
  const scaleType = careType === "light" ? "☀️" : "💧";

  return (
    <div>
      {range.map((rangeElem) => {
        return scaleValue >= rangeElem ? (
          <span key={nanoid(10)}>{scaleType}</span>
        ) : null;
      })}
    </div>
  );
}

export default CareScale;
