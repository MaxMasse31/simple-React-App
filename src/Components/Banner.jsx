import React from "react";
import "../style/Banner.css";
import logo from "../assets/leaf+1.png";

export default function Banner() {
  const title = "La maison jungle";

  return (
    <div className="lmj-banner">
      <h1 className="lmj-banner"> {title}</h1>
      <img src={logo} alt="la maison jungle" className="lmg-logo" />
    </div>
  );
}
