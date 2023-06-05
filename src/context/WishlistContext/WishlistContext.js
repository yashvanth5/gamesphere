import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { toast } from "react-hot-toast";

export const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "Display_Wishlist": {
      return { ...state, wishlist: action.payload };
    }

    case "Add_To_Wishlist": {
      return { ...state, wishlist: action.payload };
    }

    case "Remove_From_Wishlist": {
      return { ...state, wishlist: action.payload };
    }

    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [isLoadingGamesWishlist, setIsLoadingGamesWishlist] = useState(false);
  const [isErrorGamesWishlist, setIsErrorGamesWishlist] = useState(false);

  const initialWishlistState = {
    wishlist: [],
  };

  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );

  const getWishlist = async () => {
    setIsLoadingGamesWishlist(true);
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: { authorization: token },
      });
      if (response.status === 200) {
        wishlistDispatch({
          type: "Display_Wishlist",
          payload: response.data.wishlist,
        });
        setIsLoadingGamesWishlist(false);
      }
    } catch (e) {
      setIsErrorGamesWishlist(true);
      console.error(e);
    } finally {
      setIsLoadingGamesWishlist(false);
    }
  };

  useEffect(() => {
    getWishlist();
  }, []);

  const addToWishlist = async (game, token) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product: game },
        { headers: { authorization: token } }
      );
      if (response.status === 201) {
        wishlistDispatch({
          type: "Add_To_Wishlist",
          payload: response.data.wishlist,
        });
        toast.success("Added to wishlist successfully!");
      }
    } catch (e) {
      console.error(e);
      toast.error("Unable to add to wishlist!");
    }
  };

  const removeFromWishlist = async (game, token) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${game._id}`, {
        headers: { authorization: token },
      });

      if (response.status === 200) {
        wishlistDispatch({
          type: "Remove_From_Wishlist",
          payload: response.data.wishlist,
        });
        toast.success("Deleted from wishlist successfully!");
      }
    } catch (e) {
      console.error(e);
      toast.error("Unable to delete from wishlist!");
    }
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        addToWishlist,
        removeFromWishlist,
        isErrorGamesWishlist,
        isLoadingGamesWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
