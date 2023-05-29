import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext/CartContext";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { WishlistContext } from "../../context/WishlistContext/WishlistContext";

export const Cart = () => {
  const {
    cartState,
    removeFromCart,
    updateQuantityHandler,
    totalPrice,
    discountedPrice,
  } = useContext(CartContext);
  // console.log(cartState.cart)
  const { wishlistState, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  return (
    <>
      <div className="cart-page">
        <h1 className="cart-heading">Cart</h1>

        {cartState?.cart.length > 0 ? (
          <div className="cart-block">
            <div className="cart-items">
              {cartState.cart?.map((game) => {
                const {
                  title,
                  price,
                  image,
                  _id,
                  starRatings,
                  discountPercent,
                  qty,
                  discountPrice,
                } = game;
                const isAlreadyInWishlist = wishlistState.wishlist.some(
                  (individualWishlist) => individualWishlist._id === _id
                );

                return (
                  <>
                    <div className="cart-img-and-details-block">
                      <Link to={`/individual/${_id}`} className="cart-img-box">
                        <img src={image} className="cart-image" />
                      </Link>
                      <div className="cart-all-description">
                        <h2 className="cart-title"> {title} </h2>
                        <div className="price-content">
                          <p class="discount-price ">
                            {price === 0
                              ? "Free"
                              : `₹ ${price - discountPrice}`}
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
                            <div className="cart-discount">
                              <p>({discountPercent}% OFF)</p>
                            </div>
                          )}
                        </div>

                        <div className="cart-quantity">
                          {/* <p className="cart-quanitty-title">Quantity :</p> */}
                          <button
                            className="cart-quantity-decrease"
                            disabled={qty == 1}
                            onClick={() =>
                              updateQuantityHandler(game, "decrement")
                            }
                          >
                            -
                          </button>
                          <p className="cart-qunatity-live-count">
                            {" "}
                            {qty > 0 ? qty : 1}
                          </p>
                          <button
                            className="cart-quantity-increase"
                            onClick={() =>
                              updateQuantityHandler(game, "increment")
                            }
                          >
                            +
                          </button>
                        </div>

                        <button
                          className="remove-cart-btn"
                          onClick={() => removeFromCart(game)}
                        >
                          Remove From Cart
                        </button>

                        <div className="wishlist-cart-icon">
                          {isAlreadyInWishlist ? (
                            <Link onClick={() => removeFromWishlist(game)}>
                              <BsFillHeartFill className="wishlist-icon" />
                            </Link>
                          ) : (
                            <Link onClick={() => addToWishlist(game)}>
                              <FaRegHeart className="wishlist-icon" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="cart-block-price-detail">
              <div className="cart-block-price-detail-heading">
                <h2 className="cart-block-price-detail-title">Price Details</h2>
                <div className="cart-block-price-details-count-box">
                  {cartState.cart.length > 1 ? (
                    <h2 className="cart-block-price-details-count">
                      ({cartState.cart.length} items)
                    </h2>
                  ) : (
                    <h2>({cartState.cart.length} item)</h2>
                  )}
                </div>
              </div>
              <hr />
              <div className="cart-block-price-detail-total">
                <p>Total Price</p>
                <p>₹ {totalPrice}</p>
              </div>
              <div className="cart-block-price-detail-discount">
                <p>Discount</p>
                <p>₹ {discountedPrice}</p>
              </div>
              <hr />
              <div className="card-block-price-details-final">
                <div className="card-block-price-details-final-subtotal">
                  <h3>Subtotal</h3>
                  <h3>₹ {totalPrice - discountedPrice}</h3>
                </div>
              </div>

              <button className="card-block-price-details-final-btn">
                {" "}
                <h2>Checkout</h2>
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
