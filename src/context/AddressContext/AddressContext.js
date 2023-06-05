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

    // case "EDIT_ADDRESS":
    //   const updatedAddress = action.payload.editAddress;
    //   const updatedAddressList = state.address.map((address) =>
    //     address._id === updatedAddress._id ? updatedAddress : address
    //   );
    //   return {
    //     ...state,
    //     address: updatedAddressList,
    //   };

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
  // const { token } = useContext(AuthContext);

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
        area: "7B, Spring Valley Colony, Sector 12",
        city: "Gurugram",
        state: "Haryana",
        pincode: "122001",
        phoneNumber: "1234567890",
      },
      {
        _id: uuid(),
        name: "angle unyca",
        area: "25A-14, Silver Heights Apartments, Park Street",
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

  // const editAddress = (add) => {
  //   const editedAddress = addressState.address?.find(
  //     (singleAdd) => singleAdd._id === add._id
  //   );

  // const isAddressPresent = address?.find(
  //   (singleAdd) => singleAdd._id === addressFormData._id
  // );

  // addressDispatch({ type: "SET_SHOW_EDIT_ADDRESS", payload: true });
  // addressDispatch({
  //   type: "EDIT_ADDRESS",
  //   payload: { editAddress: address },
  // });
  // };

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

// cosnt [addressData,setAddressData] = useState([
//   {id:"",
// name: "",
// street: "",
// city: "",
// state: "",
// country: "",
// postalCode: "",
// MobileNum: ""}   ])
