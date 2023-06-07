import { useContext } from "react";
import "./ProductList.css";
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext";

import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";

import { AllFilters } from "./ProductListComponents/AllFilters";
import TuneIcon from "@mui/icons-material/Tune";
import { MainProducts } from "./ProductListComponents/MainProducts";

export const ProductList = () => {
  const { isLoadingGames, isErrorGames, displayFilters, setDisplayFilters } =
    useContext(ProductListingContext);

  return (
    <>
      <div className="main-product-page">
        <div className="all-filters-aside">
          <AllFilters />
        </div>

        <div className="map-style">
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
              <MainProducts />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
