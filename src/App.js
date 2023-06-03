import { Route, Routes } from "react-router";
import "./App.css";
import logo from "./logo.png";
import { Navbar } from "./components/Navigation/Navbar";
import { Home } from "./pages/HomePage/Home";

import { ProductList } from "./pages/ProductListPage/ProductList";
import { Login } from "./pages/LoginPage/Login";
import { Signup } from "./pages/SignupPage/Signup";
import { IndividualGame } from "./pages/IndividualGamePage/IndividualGame";
import { MockApi } from "./pages/MockApi/MockApi";
import { Cart } from "./pages/CartPage/Cart";
import { Wishlist } from "./pages/WishlistPage/Wishlist";
import { useState } from "react";
import { Address } from "./pages/AddressPage/Address";
import { User } from "./pages/UserPage/User";
import { RequiresAuth } from "./components/RequiresAuth";
import { Error } from "./components/Error/Error";
// import {Home} from "./pages/"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<ProductList />} />
        <Route
          path="/individual/:individualGameId"
          element={<IndividualGame />}
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              {" "}
              <Wishlist />{" "}
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<MockApi />} />
        <Route
          path="/user"
          element={
            <RequiresAuth>
              {" "}
              <User />
            </RequiresAuth>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
