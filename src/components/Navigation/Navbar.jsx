import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";

import "./Navbar.css";
import { useContext, useState } from "react";
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext";
import { CartContext } from "../../context/CartContext/CartContext";
import { WishlistContext } from "../../context/WishlistContext/WishlistContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";

// const reducer = (state,action) =>{
//     switch (action.type) {
//         case "Search_All" : {
//             return {...state,allData : action.data}
//         }

//         case "Search_Game" : {
//             return {...state, allData : state.allData.filter(({title})=> title.toLowerCase().includes(action.payload.trim().toLowerCase()))}
//         }

//         default :
//         return state;
//     }
// }

export const Navbar = () => {
  const [searchBtn, setSearchBtn] = useState(false);
  // const [searchTxt,setSearchTxt] = useState("")

  const { state, dispatch } = useContext(ProductListingContext);

  const {
    cartState: { cart },
  } = useContext(CartContext);
  const { userToken } = useContext(AuthContext);
  const {
    wishlistState: { wishlist },
  } = useContext(WishlistContext);
  const navigate = useNavigate();

  //
  return (
    <>
      <div className="navbar">
        {/* <div className="nav-links"> */}

        <div className="left-side-nav">
          <nav>
            <Link
              to="/"
              onClick={() => dispatch({ type: "Games_Reset" })}
              className="nav-brand"
            >
              GAMESPHERE
            </Link>
          </nav>
        </div>
        {/* <Link onClick={handleHamMenuToggleClick} to="/user/profile">
          {userToken ? "Profile" : "Login"}
        </Link> */}

        <div>
          {searchBtn && (
            <input
              value={state.searchInput}
              onChange={(e) =>
                dispatch({ type: "Search_Game", payload: e.target.value })
              }
              className="searchbar "
              type="text"
              placeholder=" Search for any game here..."
              onKeyPress={(e) => e.which === 13 && navigate("/store")}
            />
          )}
        </div>

        <div className="right-side-nav">
          <nav>
            <ul className="right-nav-links">
              <li onClick={() => setSearchBtn(!searchBtn)}>
                {" "}
                <Link
                  // to="/search"
                  className=" navlinks-decoration nav-search"
                >
                  {" "}
                  <AiOutlineSearch
                    style={{ margin: "-5px", fontSize: "26px" }}
                  />
                </Link>
              </li>

              <li>
                {" "}
                <Link to="/store" className=" navlinks-decoration nav-store">
                  {" "}
                  <BsBag style={{ margin: "-5px", fontSize: "24px" }} />
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/wishlist"
                  className=" navlinks-decoration nav-wishlist"
                >
                  {" "}
                  <BiHeart style={{ margin: "-5px", fontSize: "26px" }} /> (
                  {wishlist.length})
                </Link>
              </li>

              <li>
                {" "}
                <Link to="/cart" className=" navlinks-decoration nav-cart">
                  {" "}
                  <IoMdCart style={{ margin: "-5px", fontSize: "24px" }} /> (
                  {cart.length})
                </Link>
              </li>

              <li>
                <Link
                  to={userToken ? "/user" : "/login"}
                  className="navlinks-decoration nav-login"
                  // onClick={userLoginHandler}
                >
                  {userToken ? (
                    <FaUserCheck style={{ margin: "-5px", fontSize: "24px" }} />
                  ) : (
                    <FaUserTimes style={{ margin: "-5px", fontSize: "24px" }} />
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* </div> */}
      </div>
    </>
  );
};
