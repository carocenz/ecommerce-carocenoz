import { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContext from "./context/CartContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            element={<ItemListContainer greetings="¡Bienvenida Carolina!" />}
            path="/"
          />
          <Route
            element={<ItemListContainer greetings="¡Bienvenida Carolina!" />}
            path="/category/:categoryId"
          />
          <Route element={<ItemDetailContainer />} path="/item/:id" />
        </Routes>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
