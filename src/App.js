import "./style/App.css";
import Banner from "./Components/Banner";
import Cart from "./Components/Cart";
import ShoppingList from "./Components/ShoppingList";
import "./style/Banner.css";
import logo from "./assets/leaf+1.png";

function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle"  className='lmj-logo' />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <Cart />
      <ShoppingList /> 
    </div>
  );
}

export default App;
