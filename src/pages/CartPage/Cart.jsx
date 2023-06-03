import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext/CartContext";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { WishlistContext } from "../../context/WishlistContext/WishlistContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";
export const Cart = () => {
  const {
    cartState,
    removeFromCart,
    updateQuantityHandler,
    totalPrice,
    discountedPrice,
    isErrorGamesCart,
    isLoadingGamesCart,
  } = useContext(CartContext);
  // console.log(cartState.cart)
  const { wishlistState, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  const navigate = useNavigate();
  const { userToken, isLoggedIn, currentUser, token } = useContext(AuthContext);

  return (
    <>
      <div className="cart-page">
        <h1 className="cart-heading">CART</h1>

        {isLoadingGamesCart ? (
          <Loader />
        ) : isErrorGamesCart ? (
          <Error />
        ) : (
          <div>
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
                      }
                    };

                    const removeFromWishlistHandler = (e, game, token) => {
                      e.preventDefault();
                      removeFromWishlist(game, token);
                    };

                    const updateQuantityBtnHandler = (
                      e,
                      game,
                      actionType,
                      token
                    ) => {
                      e.preventDefault();
                      updateQuantityHandler(game, actionType, token);
                    };

                    return (
                      <>
                        <div className="cart-img-and-details-block">
                          <Link
                            to={`/individual/${_id}`}
                            className="cart-img-box"
                          >
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
                                disabled={qty < 2}
                                onClick={(e) =>
                                  updateQuantityBtnHandler(
                                    e,
                                    game,
                                    "decrement",
                                    token
                                  )
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
                                  updateQuantityBtnHandler(
                                    e,
                                    game,
                                    "increment",
                                    token
                                  )
                                }
                              >
                                +
                              </button>
                            </div>

                            <button
                              className="remove-cart-btn"
                              onClick={(e) =>
                                removeFromCartBtnHandler(e, game, token)
                              }
                            >
                              Remove From Cart
                            </button>

                            <div className="wishlist-cart-icon">
                              {isAlreadyInWishlist ? (
                                <Link
                                  onClick={(e) =>
                                    removeFromWishlistHandler(e, game, token)
                                  }
                                >
                                  <BsFillHeartFill className="wishlist-icon" />
                                </Link>
                              ) : (
                                <button
                                  className="wishlist-cart-btn"
                                  onClick={(e) =>
                                    addToWishlistBtnHandler(e, game, token)
                                  }
                                >
                                  <FaRegHeart className="wishlist-icon" />
                                </button>
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
                    <h2 className="cart-block-price-detail-title">
                      Price Details
                    </h2>
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
              <div className="cart-empty-box">
                <h2 className="cart-empty">Oops! Your cart is empty! </h2>
                <NavLink to="/store">
                  {" "}
                  <button className="cart-continue-shop">
                    Continue Shopping!
                  </button>
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
