import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductListingContext } from "../../../context/ProductListingContext/ProductListingContext";

export const GamesSection = () => {
  const { getProductData } = useContext(ProductListingContext);
  const featuredGames = getProductData.filter(({ featured }) => featured);

  const bestSellerGames = getProductData.filter(({ bestSeller }) => bestSeller);

  const commingSoonGames = getProductData.filter(
    ({ comingSoon }) => comingSoon
  );

  return (
    <>
      {/* card-1 */}
      <div>
        <p className="section-title">Featured</p>

        <div className="all-products-section">
          {featuredGames?.map(({ title, image, _id }) => (
            <Link
              to={`/individual/${_id}`}
              className="sections-individual-product"
            >
              <div className="sections-all-images">
                <img
                  src={image}
                  className="sections-image-individual"
                  alt="featured games "
                />
              </div>
              <p className="sections-image-title">{title}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* card-2 */}

      <div>
        <p className="section-title">Best Sellers</p>

        <div className="all-products-section">
          {bestSellerGames?.map(({ title, image, _id }) => (
            <Link
              to={`/individual/${_id}`}
              className="sections-individual-product"
            >
              <div className="sections-all-images">
                <img
                  src={image}
                  className="sections-image-individual"
                  alt="top games"
                />
              </div>
              <p className="sections-image-title">{title}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* card-3 */}

      <div>
        <p className="section-title">Coming Soon</p>

        <div className="all-products-section">
          {commingSoonGames?.map(({ title, image, _id }) => (
            <Link
              to={`/individual/${_id}`}
              className="sections-individual-product"
            >
              <div className="sections-all-images">
                <img
                  src={image}
                  className="sections-image-individual"
                  alt="upcoming games "
                />
              </div>
              <p className="sections-image-title">{title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
