import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductDataProvider } from "./context/ProductListingContext/ProductListingContext";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { CartProvider } from "./context/CartContext/CartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        
      <ProductDataProvider>
      <CartProvider>
      <App />
      </CartProvider>
      </ProductDataProvider>
     
      </AuthProvider>
    </Router>
  
  </React.StrictMode>,
  document.getElementById("root")
);
