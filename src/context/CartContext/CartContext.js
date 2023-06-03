import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import axios from "axios";
// import { ProductListingContext } from "../ProductListingContext/ProductListingContext";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "Display_Cart": {
      return { ...state, cart: action.payload };
    }

    case "Add_To_Cart": {
      return { ...state, cart: action.payload };
    }

    case "Delete_From_Cart": {
      return { ...state, cart: action.payload };
    }

    case "Updata_Quantity_Handler": {
      return { ...state, cart: action.payload };
    }

    default:
      return state;
  }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [isLoadingGamesCart, setIsLoadingGamesCart] = useState(false);
  const [isErrorGamesCart, setIsErrorGamesCart] = useState(false);

  const initialCartState = {
    cart: [],
  };

  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const getCart = async () => {
    setIsLoadingGamesCart(true);
    try {
      const response = await axios.get("/api/user/cart", {
        headers: { authorization: token },
      });
      if (response.status === 200) {
        cartDispatch({ type: "Display_Cart", payload: response.data.cart });
        setIsLoadingGamesCart(false);
      }
    } catch (e) {
      setIsErrorGamesCart(true);
      console.error(e);
    } finally {
      setIsLoadingGamesCart(false);
    }
  };

  useEffect(() => {
    getCart();
  }, []);
  // console.log(cartState)

  const addToCart = async (game, token) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: game },
        { headers: { authorization: token } }
      );
      // console.log(response)

      if (response.status === 201) {
        // console.log(response.data.cart)
        cartDispatch({ type: "Add_To_Cart", payload: response.data.cart });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const removeFromCart = async (game, token) => {
    try {
      const response = await axios.delete(`/api/user/cart/${game._id}`, {
        headers: { authorization: token },
      });

      if (response.status === 200) {
        // console.log(response.data.cart)
        cartDispatch({ type: "Delete_From_Cart", payload: response.data.cart });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const updateQuantityHandler = async (game, actionType, token) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${game._id}`,
        { action: { type: actionType } },
        { headers: { authorization: token } }
      );
      // console.log(response)
      if (response.status === 200) {
        console.log(response.data.cart);
        cartDispatch({
          type: "Updata_Quantity_Handler",
          payload: response.data.cart,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const totalPrice = cartState?.cart?.reduce(
    (total, { price, qty }) => total + price * qty,
    0
  );

  const discountedPrice = cartState?.cart?.reduce(
    (total, { discountPrice, qty }) => total + discountPrice * qty,
    0
  );
  return (
    <>
      <CartContext.Provider
        value={{
          cartState,
          addToCart,
          removeFromCart,
          updateQuantityHandler,
          totalPrice,
          discountedPrice,
          isErrorGamesCart,
          isLoadingGamesCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};
