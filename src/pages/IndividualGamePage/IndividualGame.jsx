import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";

import "./IndividualGame.css";
import { CartContext } from "../../context/CartContext/CartContext";
import { WishlistContext } from "../../context/WishlistContext/WishlistContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";

export const IndividualGame = () => {
  const { getProductData } = useContext(ProductListingContext);
  const { individualGameId } = useParams();
  const { addToCart, cartState } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, wishlistState } =
    useContext(WishlistContext);
  const navigate = useNavigate();
  const { token, currentUser, userToken, isLoggedIn } = useContext(AuthContext);
  const selectedGame = getProductData.find(
    (game) => game._id === String(individualGameId)
  );

  const showAddToCartButton = !selectedGame.comingSoon;

  const checkAlreadyInCart = cartState.cart.some(
    (individualGame) => individualGame._id === selectedGame._id
  );

  const checkAlreadyInWishlist = wishlistState.wishlist.some(
    (individualGame) => individualGame._id === selectedGame._id
  );

  const addToCartBtnHandler = (e, game, token) => {
    e.preventDefault();
    if (currentUser) {
      addToCart(game, token);
    } else {
      navigate("/login");
    }
  };

  const addToWishlistBtnHandler = (e, game, token) => {
    e.preventDefault();
    if (currentUser) {
      addToWishlist(game, token);
    } else {
      navigate("/login");
    }
  };

  const removeFromWishlistHandler = (e, game, token) => {
    e.preventDefault();
    removeFromWishlist(game, token);
  };
  return (
    <>
      <div className="product-detail-section">
        <div className="main-game-card">
          <div className="game-img-main">
            <img className="game-image" src={selectedGame.image} />
          </div>

          <div className="img-description">
            {/* here information about imagae */}
            <h1 className="product-detail-title"> {selectedGame.title}</h1>
            <div className="wishlist">
              {checkAlreadyInWishlist ? (
                <Link
                  onClick={(e) =>
                    removeFromWishlistHandler(e, selectedGame, token)
                  }
                >
                  <BsFillHeartFill className="individual-wishlist-icon" />
                </Link>
              ) : (
                <button
                  className="individual-wishlist-btn"
                  onClick={(e) =>
                    addToWishlistBtnHandler(e, selectedGame, token)
                  }
                >
                  <FaRegHeart className="individual-wishlist-icon" />
                </button>
              )}
            </div>
            {/* we will see late to use or not */}
            <p>
              {" "}
              <p className="product-detail-headings">Category :</p>{" "}
              {selectedGame.categoryName.map((item) => (
                <div className="product-detail-categories">{item}</div>
              ))}
            </p>
            <p>
              {" "}
              <p className="product-detail-headings">Publisher :</p>{" "}
              {selectedGame.publisher}
            </p>
            <p>
              {" "}
              <p className="product-detail-headings">Release Date : </p>
              {selectedGame.releaseDate}
            </p>
            <p>
              {" "}
              <p className="product-detail-headings">Price :</p>{" "}
              {selectedGame.price}
            </p>
            <p>
              {" "}
              <p className="product-detail-headings">Platform : </p>
              {selectedGame.platform}
            </p>
            <p>
              <p className="product-detail-headings">Description :</p>{" "}
              {selectedGame.description}
            </p>

            <div>
              {checkAlreadyInCart ? (
                <Link to="/cart">
                  <button className="individual-item-go-to-cart-btn">
                    Go to Cart{" "}
                  </button>
                </Link>
              ) : (
                showAddToCartButton && (
                  <button
                    className="individual-item-buy-btn"
                    onClick={(e) => addToCartBtnHandler(e, selectedGame, token)}
                  >
                    Add to Cart
                  </button>
                )
              )}
            </div>
            {/* // ) : ( // "" // ) } */}
          </div>
          <Link className="product-detail--go-back" to="/store">
            Go Back
          </Link>
        </div>
      </div>
    </>
  );
};
