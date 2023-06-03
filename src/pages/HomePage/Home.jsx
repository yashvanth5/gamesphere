import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import bannerimg from "../images/gamestore.webp";
import actionimg from "../images/category-images/action-category-photo-one.webp";
import shooterimg from "../images/category-images/shooter-category-photo-one.jpg";
import horrorimg from "../images/category-images/horror-category-photo-one.avif";
import strategyimg from "../images/category-images/strategy-category-photo-one.avif";
import { useContext, useState } from "react";
import "./Home.css";
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext";
import { Footer } from "../../components/Footer/Footer";
import { CategoryContext } from "../../context/CategoryContext/CategoriesContext";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";

export { actionimg, shooterimg, horrorimg, strategyimg };

export const Home = () => {
  const { getProductData } = useContext(ProductListingContext);
  const {
    categoryState,
    getCategoryByID,
    isErrorGamesCategory,
    isLoadingGamesCategory,
  } = useContext(CategoryContext);
  console.log(getProductData);

  const featuredGames = getProductData.filter(({ featured }) => featured);

  const bestSellerGames = getProductData.filter(({ bestSeller }) => bestSeller);

  const commingSoonGames = getProductData.filter(
    ({ comingSoon }) => comingSoon
  );

  const navigate = useNavigate();
  return (
    <>
      {isLoadingGamesCategory ? (
        <Loader />
      ) : isErrorGamesCategory ? (
        <Error />
      ) : (
        <div>
          <div>
            <img src={bannerimg} alt="BannerImage" className="banner-img" />
          </div>

          <button className="banner-btn">
            {" "}
            <Link className="banner-btn-link" to="/store">
              Browse deals{" "}
            </Link>
          </button>

          <div className="homepage-categories">
            <div>
              <p className="genres-title"> POPULAR GENRES</p>
            </div>

            <div className="genres-section">
              {categoryState?.categories?.map(
                ({ _id, categoryName, image }) => (
                  <button
                    className="single-genre-category single-genre-btn"
                    key={_id}
                    onClick={() => {
                      getCategoryByID(_id);
                      navigate("/store");
                    }}
                  >
                    <img
                      src={image}
                      alt="Action Image"
                      className="all-categories-image"
                    />
                    <p className="category-names">{categoryName}</p>
                  </button>
                )
              )}
            </div>
          </div>

          {/* card-1 */}

          <div>
            {/* <div> */}
            <p className="section-title">Featured</p>

            {/* </div> */}
            <div className="all-products-section">
              {featuredGames?.map(({ title, price, image, _id }) => (
                <Link
                  to={`/individual/${_id}`}
                  className="sections-individual-product"
                >
                  <div className="sections-all-images">
                    <img
                      src={image}
                      className="sections-image-individual"
                      alt="old games images"
                    />
                  </div>
                  <p className="sections-image-title">{title}</p>
                  {/* <p>{price}</p> */}
                  {/* <div className="view-link-container">
            <NavLink   to={`/individual/${_id}`}      className="view-nav-link">
            view
          </NavLink>
          </div> */}
                </Link>
              ))}
            </div>
          </div>

          {/* card-2 */}

          <div>
            {/* <div> */}
            <p className="section-title">Best Sellers</p>
            {/* </div> */}
            <div className="all-products-section">
              {bestSellerGames?.map(({ title, price, image, _id }) => (
                <Link
                  to={`/individual/${_id}`}
                  className="sections-individual-product"
                >
                  <div className="sections-all-images">
                    <img
                      src={image}
                      className="sections-image-individual"
                      alt="old games images"
                    />
                  </div>
                  <p className="sections-image-title">{title}</p>
                  {/* <p>{price}</p> */}
                </Link>
              ))}
            </div>
          </div>

          {/* card-3 */}

          <div>
            {/* <div> */}
            <p className="section-title">Coming Soon</p>
            {/* </div> */}
            <div className="all-products-section">
              {commingSoonGames?.map(({ title, price, image, _id }) => (
                <Link
                  to={`/individual/${_id}`}
                  className="sections-individual-product"
                >
                  <div className="sections-all-images">
                    <img
                      src={image}
                      className="sections-image-individual"
                      alt="old games images"
                    />
                  </div>
                  <p className="sections-image-title">{title}</p>
                  {/* <p>{price}</p> */}
                </Link>
              ))}
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};
