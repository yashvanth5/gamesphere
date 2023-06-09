import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

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
      return {
        ...state,
        address: state.address.find(
          (singleadd) => singleadd._id === action.payload._id
        )
          ? state.address.map((checkadd) =>
              checkadd._id === action.payload._id
                ? (checkadd = action.payload)
                : checkadd
            )
          : [...state.address, action.payload],
      };
    }

    case "DELETE_ADDRESS": {
      return {
        ...state,
        address: [
          ...state.address.filter((el) => el._id !== action.payload._id),
        ],
      };
    }

    case "RESET_ADDRESS_DETAILS": {
      return {
        ...state,
        addressFormData: action.payload,
      };
    }

    case "CHECKOUT_ADDRESS_ID": {
      return {
        ...state,
        selectedAddressId: action.payload,
      };
    }
    default:
      return state;
  }
};

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
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
        area: " Spring Valley Colony,7B, Sector 12",
        city: "Gurugram",
        state: "Haryana",
        pincode: "122001",
        phoneNumber: "1234567890",
      },
      {
        _id: uuid(),
        name: "angle unyca",
        area: " Silver Heights Apartments,25A-1, Park Street",
        city: "Kolkata",
        state: "West Bengal",
        pincode: "700016",
        phoneNumber: "1987654321",
      },
    ],
    addNewAddress: false,
    addressFormData: initialAddressFormData,
    selectedAddressId: null,
  };

  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    initialAddressState
  );

  return (
    <AddressContext.Provider
      value={{
        addressState,
        addressDispatch,
        initialAddressFormData,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
