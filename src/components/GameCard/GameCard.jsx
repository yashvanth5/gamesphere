import { AuthContext } from "../../context/AuthContext/AuthContext";
import { CartContext } from "../../context/CartContext/CartContext";
import { WishlistContext } from "../../context/WishlistContext/WishlistContext";

import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useContext } from "react";

export const GameCard = ({ game }) => {
  const { addToCart, cartState } = useContext(CartContext);
  const { wishlistState, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const navigate = useNavigate();
  const { token, currentUser } = useContext(AuthContext);

  const {
    title,
    price,
    image,
    _id,
    starRatings,
    discountPercent,
    discountPrice,
  } = game;

  const isAlreadyInWishlist = wishlistState.wishlist.some(
    (individualWishlist) => individualWishlist._id === _id
  );
  const isAlreadyInCart = cartState.cart.some(
    (individualCart) => individualCart._id === _id
  );

  const addToCartBtnHandler = (e, game, token) => {
    e.preventDefault();
    if (currentUser) {
      addToCart(game, token);
    } else {
      navigate("/login");
      toast.error("Please login to continue adding to  cart!");
    }
  };

  const addToWishlistBtnHandler = (e, game, token) => {
    e.preventDefault();
    if (currentUser) {
      addToWishlist(game, token);
    } else {
      navigate("/login");
      toast.error("Please login to continue adding to  wishlist!");
    }
  };

  const removeFromWishlistHandler = (e, game, token) => {
    e.preventDefault();
    removeFromWishlist(game, token);
  };
  return (
    <>
      <div className="individual-product-item">
        <Link to={`/individual/${_id}`}>
          <img src={image} className="item-image" alt="images" />
        </Link>

        <div className="item-desciptions">
          <div className="title-with-wishlist">
            <div>
              <h3 className="item-title">{title}</h3>
            </div>
            <div className="wishlist">
              {isAlreadyInWishlist ? (
                <Link
                  onClick={(e) => removeFromWishlistHandler(e, game, token)}
                >
                  <BsFillHeartFill className="wishlist-icon" />
                </Link>
              ) : (
                <button
                  className="wishlist-btn"
                  onClick={(e) => addToWishlistBtnHandler(e, game, token)}
                >
                  <FaRegHeart className="wishlist-icon" />
                </button>
              )}
            </div>
          </div>

          <div className="star-rating">
            <p>{starRatings}</p>
            <AiFillStar className="games-rating" />
          </div>

          <div className="price-content">
            <p class="discount-price ">
              {price === 0 ? "Free" : `₹ ${price - discountPrice}`}
            </p>
            {price === 0 ? (
              ""
            ) : (
              <p class="discount-price ">
                <s class="original-price">₹ {price} </s>
              </p>
            )}

            {price === 0 ? (
              ""
            ) : (
              <p className="discount-percent">({discountPercent}% off)</p>
            )}
          </div>

          {isAlreadyInCart ? (
            <Link to="/cart">
              <button className="item-go-to-cart-btn">Go to Cart </button>
            </Link>
          ) : (
            <button
              className="item-buy-btn"
              onClick={(e) => addToCartBtnHandler(e, game, token)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};
