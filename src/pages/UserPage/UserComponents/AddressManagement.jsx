import { useContext } from "react";
import { AddressContext } from "../../../context/AddressContext/AddressContext";
import { AddressForm } from "./AddressComponent/AddressForm";
import { v4 as uuid } from "uuid";

export const AddressManagement = () => {
  // const {
  //   addressState: { address },
  // } = useContext(AddressContext);

  // console.log(address);
  const {
    addressState: { address, addNewAddress },
    addressDispatch,
    initialAddressFormData,
  } = useContext(AddressContext);

  const addNewAddressHandler = () => {
    addressDispatch({ type: "SET_SHOW_NEW_ADDRESS", payload: true });
    addressDispatch({
      type: "RESET_ADDRESS_DETAILS",
      payload: initialAddressFormData,
    });
  };
  console.log(address);
  const removeAddress = (_id) => {
    addressDispatch({ type: "DELETE_ADDRESS", payload: { _id } });
  };
  // const editAddress = (editAddress) => {
  //   addressDispatch({ type: "SET_SHOW_NEW_ADDRESS", payload: true });
  //   addressDispatch({
  //     type: "EDIT_ADDRESS",
  //     payload: { id: uuid(), editAddress },
  //   });
  // };

  // const editAddress = (address) => {
  //   addressDispatch({ type: "SET_SHOW_NEW_ADDRESS", payload: true });
  //   addressDispatch({
  //     type: "EDIT_ADDRESS",
  //     payload: { editAddress: address },
  //   });
  // };

  return (
    <>
      <div className="profile-address-page">
        <div className="profile-address-page-header">
          <h2>My Addresses</h2>
          <button onClick={() => addNewAddressHandler()}>
            {" "}
            <h3>Add New Address</h3>
          </button>
        </div>

        <ul className="profile-address-page-list profile-address-page-list-container">
          {address?.map((add) => {
            const { _id, name, area, city, state, pincode, phoneNumber } = add;
            return (
              <li key={_id}>
                <p>{name}</p>
                <p>{area}</p>
                <p>
                  {city}, {state}, {pincode}
                </p>
                <p>{phoneNumber}</p>

                <div>
                  <button
                    className="profile-edit-btn"
                    onClick={() => {
                      addressDispatch({
                        type: "SET_SHOW_NEW_ADDRESS",
                        payload: true,
                      });
                      addressDispatch({
                        type: "SHOW_DUMMY_ADDRESS",
                        payload: add,
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="profile-delete-btn"
                    onClick={() => removeAddress(_id)}
                  >
                    Delete
                  </button>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>

        {addNewAddress && (
          <div className="profileAddress-form">
            <AddressForm />
          </div>
        )}
      </div>
    </>
  );
};
