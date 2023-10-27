import "./style/App.css";
import Banner from "./Components/Banner";
import Cart from "./Components/Cart";
import ShoppingList from "./Components/ShoppingList";
import "./style/Banner.css";
import logo from "./assets/leaf+1.png";
import "./style/Layout.css";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [cart, updateCart] = useState([]);
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">

		{/* faire remonter cart */}
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
