import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import ItemListContainer from "./components/ItemListContainer/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/index";
import CartContext from "./context/CartContext";

function App() {
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
