import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>


    </BrowserRouter>
  );
}

export default App;
