import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import "./IndividualGame.css";
import { CartContext } from "../../context/CartContext/CartContext";
import { WishlistContext } from "../../context/WishlistContext/WishlistContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { toast } from "react-hot-toast";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";

export const IndividualGame = () => {
  const [getIndividualProduct, setGetIndividualProduct] = useState({});
  const { getGameById, isLoadingGames, isErrorGames } = useContext(
    ProductListingContext
  );
  const { individualGameId } = useParams();
  const { addToCart, cartState } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, wishlistState } =
    useContext(WishlistContext);
  const navigate = useNavigate();
  const { token, currentUser } = useContext(AuthContext);

  useEffect(() => {
    getGameById(individualGameId, setGetIndividualProduct);
  }, []);

  const showAddToCartButton = !getIndividualProduct.comingSoon;

  const checkAlreadyInCart = cartState.cart.some(
    (individualGame) => individualGame._id === getIndividualProduct._id
  );

  const checkAlreadyInWishlist = wishlistState.wishlist.some(
    (individualGame) => individualGame._id === getIndividualProduct._id
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
      {isLoadingGames ? (
        <Loader />
      ) : isErrorGames ? (
        <Error />
      ) : (
        <div className="product-detail-section">
          <div className="main-game-card">
            <div className="game-img-main">
              <img
                className="game-image"
                alt="game"
                src={getIndividualProduct.image}
              />
            </div>

            <div className="img-description">
              <h1 className="product-detail-title">
                {" "}
                {getIndividualProduct.title}
              </h1>
              <div className="wishlist">
                {checkAlreadyInWishlist ? (
                  <Link
                    onClick={(e) =>
                      removeFromWishlistHandler(e, getIndividualProduct, token)
                    }
                  >
                    <BsFillHeartFill className="individual-wishlist-icon" />
                  </Link>
                ) : (
                  <button
                    className="individual-wishlist-btn"
                    onClick={(e) =>
                      addToWishlistBtnHandler(e, getIndividualProduct, token)
                    }
                  >
                    <FaRegHeart className="individual-wishlist-icon" />
                  </button>
                )}
              </div>

              <p>
                {" "}
                <p className="product-detail-headings">Category :</p>{" "}
                {getIndividualProduct?.categoryName?.map((item) => (
                  <div className="product-detail-categories">| {item} |</div>
                ))}
              </p>
              <p>
                {" "}
                <p className="product-detail-headings">Publisher :</p>{" "}
                {getIndividualProduct?.publisher}
              </p>
              <p>
                {" "}
                <p className="product-detail-headings">Release Date : </p>
                {getIndividualProduct?.releaseDate}
              </p>
              <p>
                {" "}
                <p className="product-detail-headings">Price :</p>{" "}
                {getIndividualProduct?.price}
              </p>
              <p>
                {" "}
                <p className="product-detail-headings">Platform : </p>
                {getIndividualProduct?.platform}
              </p>
              <p>
                <p className="product-detail-headings">Description :</p>{" "}
                {getIndividualProduct?.description}
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
                      onClick={(e) =>
                        addToCartBtnHandler(e, getIndividualProduct, token)
                      }
                    >
                      Add to Cart
                    </button>
                  )
                )}
              </div>
            </div>
            <Link className="product-detail--go-back" to="/">
              Go Back
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
