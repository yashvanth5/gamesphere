import { createContext, useContext, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";

import axios from "axios";
import { AuthContext } from "../AuthContext/AuthContext";
import { v4 } from "uuid";

const addressReducer = (state, action) => {
  switch (action.type) {
    case "DISPLAY_ADDRESSES": {
      return { ...state, address: action.payload };
    }

    case "SET_SHOW_NEW_ADDRESS": {
      return { ...state, addNewAddress: action.payload };
    }

    case "SHOW_DUMMY_ADDRESS": {
      return { ...state, addressFormData: action.payload };
    }
    case "SET_ADDRESS_DETAILS": {
      return {
        ...state,
        addressFormData: {
          ...state.addressFormData,
          [action.payload.name]: action.payload.value,
        },
      };
    }
    case "ADD_TO_ADDRESS": {
      return { ...state, address: [...state.address, action.payload] };
    }

    case "DELETE_ADDRESS": {
      return {
        ...state,
        address: [
          ...state.address.filter((el) => el._id !== action.payload._id),
        ],
      };
    }

    // case "EDIT_ADDRESS": {
    //   return {
    //     ...state,
    //     address: state.address.map((el) => {
    //       return el._id === action.payload._id ? action.payload : el;
    //       console.log(action.payload);
    //     }),
    //   };
    // }

    case "EDIT_ADDRESS": {
      const updatedAddress = state.address.map((el) => {
        return el._id === action.payload.editAddress._id
          ? action.payload.editAddress
          : el;
      });

      return {
        ...state,
        addressFormData: updatedAddress,
      };
    }

    case "RESET_ADDRESS_DETAILS": {
      return {
        ...state,
        addressFormData: action.payload,
      };
    }
    default:
      return state;
  }
};

// const { userToken } = useContext(AuthContext);

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  // const encodedToken = token;

  const initialAddressFormData = {
    _id: "",
    name: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    phoneNumber: "",
  };

  const initialAddressState = {
    address: [
      {
        _id: uuid(),
        name: "Kim Tommy",
        area: "Gangnam-gu",
        city: "Seoul",
        state: "Seoul",
        pincode: "106040",
        phoneNumber: "1234567890",
      },
      {
        _id: uuid(),
        name: "angle unyca",
        area: "0B-09 & G-10 Ground Floor, Mourya House, Andheri West",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400053",
        phoneNumber: "1987654321",
      },
    ],
    addNewAddress: false,
    addressFormData: initialAddressFormData,
  };

  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    initialAddressState
  );

  console.log(addressState);
  // const getAllAddress = async () => {
  //   try {
  //     const response = await axios.get("/api/user/addresses", {
  //       headers: { authorization: encodedToken },
  //     });
  //     if (response.status === 200) {
  //       addressDispatch({
  //         type: "DISPLAY_ADDRESSES",
  //         payload: response.data.address,
  //       });
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // useEffect(() => {
  //   getAllAddress();
  // }, []);

  // async (newAddress, encodedToken) =>
  //   await axios.post(
  //     "/api/user/address/add",
  //     { address: newAddress },
  //     {
  //       headers: { authorization: encodedToken },
  //     }
  //   );

  const addToAddress = async (newAddress, token) => {
    try {
      const response = await axios.post(
        "/api/user/address/add",
        { address: newAddress },
        {
          headers: { authorization: token },
        }
      );
      const {
        status,
        data: { address },
      } = response;
      if (status === 201) {
        addressDispatch({ type: "ADD_TO_ADDRESS", payload: address });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AddressContext.Provider
      value={{
        addressState,
        addressDispatch,
        initialAddressFormData,
        addToAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

// cosnt [addressData,setAddressData] = useState([
//   {id:"",
// name: "",
// street: "",
// city: "",
// state: "",
// country: "",
// postalCode: "",
// MobileNum: ""}   ])
