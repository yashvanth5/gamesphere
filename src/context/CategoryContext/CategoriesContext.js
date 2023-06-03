import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ProductListingContext } from "../ProductListingContext/ProductListingContext";

export const CategoryContext = createContext();

const categoryReducer = (state, action) => {
  switch (action.type) {
    case "Display_Categories": {
      return { ...state, categories: action.payload };
    }
    case "Get_Category_Details": {
      return { ...state, categoryDetail: action.payload };
    }

    default:
      return state;
  }
};

export const CategoryProvider = ({ children }) => {
  const { dispatch } = useContext(ProductListingContext);

  const [isLoadingGamesCategory, setIsLoadingGamesCategory] = useState(false);
  const [isErrorGamesCategory, setIsErrorGamesCategory] = useState(false);

  const initialCategoryState = {
    categories: [],
    categoryDetail: {},
  };

  const [categoryState, categoryDispatch] = useReducer(
    categoryReducer,
    initialCategoryState
  );

  const getCategories = async () => {
    setIsLoadingGamesCategory(true);
    try {
      const response = await axios.get("/api/categories");
      if (response.status === 200) {
        categoryDispatch({
          type: "Display_Categories",
          payload: response.data.categories,
        });
        setIsLoadingGamesCategory(false);
      }
    } catch (e) {
      setIsErrorGamesCategory(true);
      console.error(e);
    } finally {
      setIsLoadingGamesCategory(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getCategoryByID = async (categoryId) => {
    setIsLoadingGamesCategory(true);
    try {
      const response = await axios(`/api/categories/${categoryId}`);
      console.log(response);
      if (response.status === 200) {
        categoryDispatch({
          type: "Get_Category_Details",
          payload: response.data.category,
        });
        dispatch({
          type: "Category_Filter",
          payload: response.data.category.value,
        });
        // dispatch({ type: "Games_Reset" });
        // if (location.pathname !== "/store") {
        //   dispatch({ type: "Games_Reset" });
        // }
        setIsLoadingGamesCategory(false);
      }
    } catch (e) {
      setIsErrorGamesCategory(true);
      console.error(e);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        categoryState,
        categoryDispatch,
        getCategoryByID,
        isErrorGamesCategory,
        isLoadingGamesCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
