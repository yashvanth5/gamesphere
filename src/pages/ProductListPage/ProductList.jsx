import { useContext, useState } from "react";
import "./ProductList.css";
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartContext";
import { FaRegHeart } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { WishlistContext } from "../../context/WishlistContext/WishlistContext";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";
import { toast } from "react-hot-toast";
import { AllFilters } from "./ProductListComponents/AllFilters";
import TuneIcon from "@mui/icons-material/Tune";

export const ProductList = () => {
  const {
    getProductData,
    state,
    dispatch,
    isLoadingGames,
    isErrorGames,
    getGameById,
    displayFilters,
    setDisplayFilters,
  } = useContext(ProductListingContext);
  const { addToCart, cartState } = useContext(CartContext);
  const { wishlistState, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const navigate = useNavigate();
  const { token, currentUser } = useContext(AuthContext);
  console.log(" Token from productllisting page", token);
  // console.log(token);

  // products
  const filterProductData = () => {
    const totalProductData = [...getProductData].filter(
      ({ comingSoon }) => !comingSoon
    );
    // console.log(totalProductData)

    const filterWithPriceRange = state.filterPriceRange
      ? totalProductData?.filter((game) => game.price <= state.filterPriceRange)
      : totalProductData;

    //  console.log(filterWithPriceRange)

    const sortByPrice = filterWithPriceRange?.sort((a, b) => {
      if (state.sortPrice === "HtoL") {
        return b.price - b.discountPrice - a.price + a.discountPrice;
      } else if (state.sortPrice === "LtoH") {
        return a.price - a.discountPrice - b.price + b.discountPrice;
      } else {
        return 0;
      }
    });

    // console.log(sortByPrice)

    const availabilityGames =
      state.topSellers || state.specialGames || state.gamesOnSale
        ? sortByPrice.filter(
            (game) =>
              (state.topSellers && game.topProductSellers) ||
              (state.specialGames && game.specials) ||
              (state.gamesOnSale && game.onSale)
          )
        : sortByPrice;

    // console.log(availabilityGames)

    const searchGame =
      state.searchInput.length > 0
        ? availabilityGames.filter(({ title }) =>
            title.toLowerCase().includes(state.searchInput.trim().toLowerCase())
          )
        : availabilityGames;

    const platformGames =
      state.gamePlatformWindow || state.gamePlatformMac
        ? searchGame?.filter(
            (games) =>
              (state.gamePlatformWindow &&
                games.platform.includes("windows")) ||
              (state.gamePlatformMac && games.platform.includes("mac"))
          )
        : searchGame;

    const filterWthRating =
      state.rating !== null
        ? platformGames.filter((game) => game.starRatings <= state.rating)
        : platformGames;
    // console.log(filterWthRating)

    const allCategoryGames =
      state.gameCategoryAction ||
      state.gameCategoryHorror ||
      state.gameCategoryShooter ||
      state.gameCategoryStrategy ||
      state.gameCategoryOpenWorld ||
      state.gameCategoryIndie ||
      state.gameCategoryRpg
        ? filterWthRating?.filter(
            (games) =>
              (state.gameCategoryAction &&
                games.categoryName.includes("Action")) ||
              (state.gameCategoryHorror &&
                games.categoryName.includes("Horror")) ||
              (state.gameCategoryShooter &&
                games.categoryName.includes("Shooter")) ||
              (state.gameCategoryStrategy &&
                games.categoryName.includes("Strategy")) ||
              (state.gameCategoryOpenWorld &&
                games.categoryName.includes("Open World")) ||
              (state.gameCategoryIndie &&
                games.categoryName.includes("Indie")) ||
              (state.gameCategoryRpg && games.categoryName.includes("RPG"))
          )
        : filterWthRating;

    return allCategoryGames;
  };

  const allProductData = filterProductData();

  // console.log(filterProductData())

  // sort function
  // const sortRadioHandler = (selectedValue) => {
  //   dispatch({ type: "Sort_By_Price", payload: selectedValue });
  // };

  // const {userToken} = useContext(AuthContext)

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
      <div className="main-product-page">
        <div className="all-filters-aside">
          <AllFilters />
        </div>

        <div className="map-style">
          {/* <h1 className="product-title">PRODUCT CART</h1> */}
          <div
            className="show-filters"
            onClick={() => setDisplayFilters(!displayFilters)}
          >
            <TuneIcon className="tune-icon" />
          </div>
          {displayFilters && (
            <div className="all-the-filters">
              <AllFilters />
            </div>
          )}
          <div>
            {isLoadingGames ? (
              <Loader />
            ) : isErrorGames ? (
              <Error />
            ) : (
              <div className="product-show">
                {allProductData.length > 0 ? (
                  allProductData?.map((game) => {
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
                    return (
                      <div className="individual-product-item">
                        <Link to={`/individual/${_id}`}>
                          <img
                            src={image}
                            className="item-image"
                            alt="images"
                          />
                        </Link>

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
                                <button
                                  className="wishlist-btn"
                                  onClick={(e) =>
                                    addToWishlistBtnHandler(e, game, token)
                                  }
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
                            {/* //add discountprice price-discountPrice */}
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
                            // <Link>
                            <button
                              className="item-buy-btn"
                              onClick={(e) =>
                                addToCartBtnHandler(e, game, token)
                              }
                            >
                              Add to Cart
                            </button>
                            // </Link>
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="items-not-found">No Products Found!</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
