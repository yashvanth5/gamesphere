import { useContext } from "react";
import { useParams } from "react-router";
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";

import "./IndividualGame.css";
import { CartContext } from "../../context/CartContext/CartContext";
import { WishlistContext } from "../../context/WishlistContext/WishlistContext";

export const IndividualGame = () => {
  const { getProductData } = useContext(ProductListingContext);
  const { individualGameId } = useParams();
  const { addToCart, cartState } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, wishlistState } =
    useContext(WishlistContext);

  const selectedGame = getProductData.find(
    (game) => game._id === String(individualGameId)
  );

  //   const isAlreadyInCart = cartState.cart.some(
  //     (individualCart) => individualCart._id === selectedGame._id
  //   );

  const checkAlreadyInCart = cartState.cart.some(
    (individualGame) => individualGame._id === selectedGame._id
  );

  const checkAlreadyInWishlist = wishlistState.wishlist.some(
    (individualGame) => individualGame._id === selectedGame._id
  );
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
                <Link onClick={() => removeFromWishlist(selectedGame)}>
                  <BsFillHeartFill className="individual-wishlist-icon" />
                </Link>
              ) : (
                <Link onClick={() => addToWishlist(selectedGame)}>
                  <FaRegHeart className="individual-wishlist-icon" />
                </Link>
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
            {checkAlreadyInCart ? (
              <Link to="/cart">
                <button className="individual-item-go-to-cart-btn">
                  Go to Cart{" "}
                </button>
              </Link>
            ) : (
              <Link>
                <button
                  className="individual-item-buy-btn"
                  onClick={() => addToCart(selectedGame)}
                >
                  Add to Cart
                </button>
              </Link>
            )}
          </div>
          <Link className="product-detail--go-back" to="/store">
            Go Back
          </Link>
        </div>
      </div>
    </>
  );
};
