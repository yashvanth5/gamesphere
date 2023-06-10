import { useContext } from "react";
import { ProductListingContext } from "../../../context/ProductListingContext/ProductListingContext";

import { GameCard } from "../../../components/GameCard/GameCard";

export const MainProducts = () => {
  const { allProductData } = useContext(ProductListingContext);

  return (
    <>
      <div className="product-show">
        {allProductData.length > 0 ? (
          allProductData?.map((game) => <GameCard game={game} key={game._id} />)
        ) : (
          <p className="items-not-found">No Products Found!</p>
        )}
      </div> 
    </>
  );
};
