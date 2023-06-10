import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { WishlistContext } from "../../context/WishlistContext/WishlistContext";
import { CartContext } from "../../context/CartContext/CartContext";
import { toast } from "react-hot-toast";
import { BsFillHeartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
export const CartCard = ({ game }) => {
  const { wishlistState, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  const navigate = useNavigate();
  const { currentUser, token } = useContext(AuthContext);
  const { removeFromCart, updateQuantityHandler } = useContext(CartContext);

  const { title, price, image, _id, discountPercent, qty, discountPrice } =
    game;

  const isAlreadyInWishlist = wishlistState.wishlist.some(
    (individualWishlist) => individualWishlist._id === _id
  );

  const removeFromCartBtnHandler = (e, game, token) => {
    e.preventDefault();
    removeFromCart(game, token);
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

  const updateQuantityBtnHandler = (e, game, actionType, token) => {
    e.preventDefault();
    updateQuantityHandler(game, actionType, token);
  };
  return (
    <>
      <div className="cart-img-and-details-block">
        <Link to={`/individual/${_id}`} className="cart-img-box">
          <img src={image} alt="game images" className="cart-image" />
        </Link>
        <div className="cart-all-description">
          <h2 className="cart-title"> {title} </h2>
          <div className="cart-price-content">
            <p class="cart-discount-price">
              {price === 0 ? "Free" : `₹ ${price - discountPrice}`}
            </p>
            {price === 0 ? (
              ""
            ) : (
              <p class="cart-discount-price">
                <s class="cart-original-price">₹ {price} </s>
              </p>
            )}

            {price === 0 ? (
              ""
            ) : (
              <div className="cart-discount">
                <p>({discountPercent}% OFF)</p>
              </div>
            )}
          </div>

          <div className="cart-quantity">
            <button
              className="cart-quantity-decrease"
              disabled={qty < 2}
              onClick={(e) =>
                updateQuantityBtnHandler(e, game, "decrement", token)
              }
            >
              -
            </button>
            <p className="cart-qunatity-live-count">
              {" "}
              {
                qty
                //  > 0 ? qty : 1
              }
            </p>
            <button
              className="cart-quantity-increase"
              onClick={(e) =>
                updateQuantityBtnHandler(e, game, "increment", token)
              }
            >
              +
            </button>
          </div>

          <button
            className="remove-cart-btn"
            onClick={(e) => removeFromCartBtnHandler(e, game, token)}
          >
            Remove From Cart
          </button>

          <div className="wishlist-cart-icon">
            {isAlreadyInWishlist ? (
              <Link onClick={(e) => removeFromWishlistHandler(e, game, token)}>
                <BsFillHeartFill className="wishlist-icon" />
              </Link>
            ) : (
              <button
                className="wishlist-cart-btn"
                onClick={(e) => addToWishlistBtnHandler(e, game, token)}
              >
                <FaRegHeart className="wishlist-icon" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
