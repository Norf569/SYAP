import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./AppRouter";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CartProvider>
      <FavoritesProvider>
        <AppRouter />
      </FavoritesProvider>
    </CartProvider>
  </React.StrictMode>
);
