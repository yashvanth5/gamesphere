import { createContext, useEffect, useState, useReducer } from "react";
// import { reducerFunction,initialState } from "../../pages/ProductListPage/Reducer/Reducer";
import { reducerFunction, initialState } from "../../pages/Reducer/Reducer";
import axios from "axios";

export const ProductListingContext = createContext();

export const ProductDataProvider = ({ children }) => {
  const [getProductData, setGetProductData] = useState([]);
  const [isLoadingGames, setIsLoadingGames] = useState(false);
  const [isErrorGames, setIsErrorGames] = useState(false);

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  // const filterProductData= ()=>{
  //     // console.log(getProductData)

  //     const totalProductData = [...getProductData].filter(({comingSoon})=>!comingSoon);
  //     // console.log(totalProductData)

  //     const filterWithPriceRange = state.filterPriceRange ? totalProductData?.filter((game)=>game.price<=(state.filterPriceRange)) : totalProductData;

  // //  console.log(filterWithPriceRange)

  //     const sortByPrice = filterWithPriceRange?.sort((a,b)=>{
  //         if(state.sortPrice === 'HtoL') {
  //             return b.price - a.price
  //         }
  //         else if (state.sortPrice === 'LtoH'){
  //              return a.price - b.price
  //           }
  //           else {
  //             return 0;
  //           }

  //     })

  //     // console.log(sortByPrice)

  // const availabilityGames = state.topSellers||state.specialGames||state.gamesOnSale ? sortByPrice.filter((game)=>(state.topSellers && game.topProductSellers)|| (state.specialGames && game.specials) || (state.gamesOnSale && game.onSale)  ) : sortByPrice;

  //     // console.log(availabilityGames)

  //     const platformGames = state.gamePlatformWindow || state.gamePlatformMac ? availabilityGames?.filter((games)=>

  //     (state.gamePlatformWindow && games.platform.includes('windows')) ||
  //     (state.gamePlatformMac && games.platform.includes('mac'))

  //     ) :availabilityGames

  //     const filterWthRating =   state.rating !== null ? (platformGames.filter( (game)=>   game.starRatings <= state.rating )) : platformGames
  //     // console.log(filterWthRating)

  //     const allCategoryGames = state.gameCategoryAction ||  state.gameCategoryHorror  || state.gameCategoryShooter || state.gameCategoryStrategy || state.gameCategoryOpenWorld || state.gameCategoryIndie || state.gameCategoryRpg ? filterWthRating?.filter(
  //         (games)=>
  //         (state.gameCategoryAction && games.categoryName.includes('Action')  ) ||
  //         (state.gameCategoryHorror && games.categoryName.includes('Horror')) ||
  //         (state.gameCategoryShooter && games.categoryName.includes('Shooter')) ||
  //         (state.gameCategoryStrategy && games.categoryName.includes('Strategy')) ||
  //         (state.gameCategoryOpenWorld && games.categoryName.includes('Open World')) ||
  //         (state.gameCategoryIndie && games.categoryName.includes('Indie')) ||
  //         (state.gameCategoryRpg && games.categoryName.includes('RPG'))

  //         )  : filterWthRating

  //     return allCategoryGames
  // }

  // const allProductData = filterProductData()

  const productDataCall = async () => {
    setIsLoadingGames(true);
    try {
      const response = await axios.get("/api/products");
      if (response.status === 200) {
        setGetProductData(response.data.products);
        setIsLoadingGames(false);
      }
    } catch (e) {
      setIsErrorGames(true);
      console.error(e);
    } finally {
      setIsLoadingGames(false);
    }
  };

  useEffect(() => {
    productDataCall();
  }, []);

  return (
    <ProductListingContext.Provider
      value={{ getProductData, state, dispatch, isLoadingGames, isErrorGames }}
    >
      {children}
    </ProductListingContext.Provider>
  );
};
