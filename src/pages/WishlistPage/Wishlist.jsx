import { useContext } from "react";
import "./Wishlist.css";
import { WishlistContext } from "../../context/WishlistContext/WishlistContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { CartContext } from "../../context/CartContext/CartContext";
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";

export const Wishlist = () => {
  const {
    wishlistState,
    addToWishlist,
    removeFromWishlist,
    isErrorGamesWishlist,
    isLoadingGamesWishlist,
  } = useContext(WishlistContext);
  const { addToCart, cartState } = useContext(CartContext);
  const { getProductData, getGameById } = useContext(ProductListingContext);

  const navigate = useNavigate();
  const { token, currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="map-style">
        <h1 className="wishlist-heading">Wishlist</h1>

        {isLoadingGamesWishlist ? (
          <Loader />
        ) : isErrorGamesWishlist ? (
          <Error />
        ) : (
          <div className="wishlist-product-show">
            {wishlistState.wishlist.length > 0 ? (
              wishlistState.wishlist.map((game) => {
                const {
                  title,
                  price,
                  image,
                  _id,
                  starRatings,
                  discountPercent,
                  discountPrice,
                } = game;

                const isAlreadyInWishlist = getProductData.some(
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
                  <Link
                    to={`/individual/${_id}`}
                    className="individual-product-item"
                  >
                    <img src={image} className="item-image" alt="images" />
                    <div className="item-desciptions">
                      <div className="title-with-wishlist">
                        <div>
                          <h3 className="item-title">{title}</h3>
                        </div>
                        <div className="wishlist">
                          {isAlreadyInWishlist ? (
                            <Link
                              onClick={(e) =>
                                removeFromWishlistHandler(e, game, token)
                              }
                            >
                              <BsFillHeartFill className="wishlist-icon" />
                            </Link>
                          ) : (
                            <Link
                              onClick={(e) =>
                                addToWishlistBtnHandler(e, game, token)
                              }
                            >
                              <FaRegHeart className="wishlist-icon" />
                            </Link>
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
                          <p className="discount-percent">
                            ({discountPercent}% off)
                          </p>
                        )}
                      </div>

                      {isAlreadyInCart ? (
                        <Link to="/cart">
                          <button className="item-go-to-cart-btn">
                            Go to Cart{" "}
                          </button>
                        </Link>
                      ) : (
                        <Link>
                          <button
                            className="item-buy-btn"
                            onClick={(e) => addToCartBtnHandler(e, game, token)}
                          >
                            Add to Cart
                          </button>
                        </Link>
                      )}
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="wishlist-empty-box">
                <h2 className="wishlist-empty">
                  Oops! Your wishlist is empty!{" "}
                </h2>
                <NavLink to="/store">
                  {" "}
                  <button className="wishlist-continue-shop">
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
