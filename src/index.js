import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductDataProvider } from "./context/ProductListingContext/ProductListingContext";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { CartProvider } from "./context/CartContext/CartContext";
import { CategoryProvider } from "./context/CategoryContext/CategoriesContext";
import { WishlistProvider } from "./context/WishlistContext/WishlistContext";
import { AddressProvider } from "./context/AddressContext/AddressContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <AddressProvider>
          <ProductDataProvider>
            <CategoryProvider>
              <WishlistProvider>
                <CartProvider>
                  <App />
                </CartProvider>
              </WishlistProvider>
            </CategoryProvider>
          </ProductDataProvider>
        </AddressProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
