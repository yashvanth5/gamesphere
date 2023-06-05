import { useContext } from "react";
import { AddressContext } from "../../../../context/AddressContext/AddressContext";
import "./AddressForm.css";
import { v4 as uuid } from "uuid";
import { toast } from "react-hot-toast";

export const AddressForm = () => {
  const {
    addressState: { address, addressFormData },
    addressDispatch,
  } = useContext(AddressContext);

  const { name, area, city, state, pincode, phoneNumber } = addressFormData;

  const dummyAddress = {
    name: "Yashvanth Kumar",
    area: "Risala Abdulla , Osmangunj",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500001",
    phoneNumber: "9944332255",
  };

  const formInputHandler = (e) => {
    addressDispatch({
      type: "SET_ADDRESS_DETAILS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    // const isAddressPresent = address?.find(
    //   (singleAdd) => singleAdd._id === addressFormData._id
    // );
    // if (isAddressPresent) {
    //   addressDispatch({
    //     type: "EDIT_ADDRESS",
    //     payload: {
    //       editAddress: { id: isAddressPresent._id, ...addressFormData },
    //     },
    //   });
    // } else {
    addressDispatch({
      type: "ADD_TO_ADDRESS",
      payload: { id: uuid(), ...addressFormData },
    });
    // }

    addressDispatch({ type: "SET_SHOW_NEW_ADDRESS", payload: false });

    if (address.find((singleAdd) => singleAdd._id === addressFormData._id)) {
      toast.success("Updated address successfully!");
    } else {
      toast.success("Added new address successfully!");
    }
  };

  // const handleAddressSubmit = (e) => {
  //   e.preventDefault();
  //   if (editAddress) {
  //     addressDispatch({
  //       type: "EDIT_ADDRESS",
  //       payload: { editAddress: { id: editAddress._id, ...addressFormData } },
  //     });
  //   } else {
  //     addressDispatch({
  //       type: "ADD_TO_ADDRESS",
  //       payload: { id: uuid(), ...addressFormData },
  //     });
  //   }
  // };

  return (
    <>
      <div className="address-form">
        <h2>Add New Address</h2>
        <form onSubmit={handleAddressSubmit}>
          <label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name || ""}
              className="formInput"
              onChange={formInputHandler}
              required
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Area"
              name="area"
              value={area || ""}
              className="formInput"
              onChange={formInputHandler}
              required
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={city || ""}
              className="formInput"
              onChange={formInputHandler}
              required
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="State"
              value={state || ""}
              name="state"
              className="formInput"
              onChange={formInputHandler}
              required
            />
          </label>
          <label>
            <input
              type="number"
              placeholder="Pincode"
              value={pincode || ""}
              name="pincode"
              min="100000"
              max="999999"
              className="formInput"
              onChange={formInputHandler}
              required
            />
          </label>
          <label>
            <input
              type="number"
              placeholder="Phone No"
              name="phoneNumber"
              min="1000000000"
              max="9999999999"
              value={phoneNumber || ""}
              className="formInput"
              onChange={formInputHandler}
              required
            />
          </label>
          <div>
            <button type="submit">
              {" "}
              {address.find(
                (singleAdd) => singleAdd._id === addressFormData._id
              )
                ? `Update`
                : `Add`}{" "}
            </button>
            <button
              onClick={() =>
                addressDispatch({
                  type: "SET_SHOW_NEW_ADDRESS",
                  payload: false,
                })
              }
            >
              Cancel
            </button>
          </div>
          {address.find(
            (singleAdd) => singleAdd._id === addressFormData._id
          ) ? (
            ""
          ) : (
            <button
              type="button"
              onClick={() =>
                addressDispatch({
                  type: "SHOW_DUMMY_ADDRESS",
                  payload: dummyAddress,
                })
              }
            >
              <p>Fill with Dummy Address</p>
            </button>
          )}
        </form>
      </div>
    </>
  );
};
