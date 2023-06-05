import { useContext, useEffect } from "react";
import { AddressContext } from "../../context/AddressContext/AddressContext";
import "./Checkout.css";
import { AddressForm } from "../UserPage/UserComponents/AddressComponent/AddressForm";
import { CartContext } from "../../context/CartContext/CartContext";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

export const Checkout = () => {
  const navigate = useNavigate();
  const {
    cartState: { cart },
    totalPrice,
    discountedPrice,
    removeAllFromCart,
  } = useContext(CartContext);
  const {
    addressState: { address, addNewAddress, selectedAddressId },
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

  const selectedAddress = address?.find((add) => add._id === selectedAddressId);
  console.log(selectedAddress);

  const placeOrderHandler = () => {
    if (cart?.length === 0) {
      toast.error("Please add something to cart for checking out!");
      navigate("/cart");
    } else if (selectedAddressId === null) {
      toast.error("Please select an address for checking out!");
    } else {
      toast.success("Order successfully placed!");
      removeAllFromCart();
      navigate("/");
    }
  };

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/cart");
    }
  });
  return (
    <>
      <div className="checkout-page">
        <h1>Checkout</h1>

        <div className="checkout-content">
          <div className="checkout-address">
            <h2 className="checkout-address-title">Select Address</h2>

            <ul>
              {address?.map((add) => {
                const { _id, name, area, city, state, pincode, phoneNumber } =
                  add;
                return (
                  <div
                    key={_id}
                    className="checkout-address-details"
                    onClick={() =>
                      addressDispatch({
                        type: "CHECKOUT_ADDRESS_ID",
                        payload: _id,
                      })
                    }
                  >
                    <input
                      checked={selectedAddressId === _id}
                      type="radio"
                      name="checkout-address"
                      onChange={() =>
                        addressDispatch({
                          type: "CHECKOUT_ADDRESS_ID",
                          payload: _id,
                        })
                      }
                    />

                    <div className="checkout-address-details-info">
                      <p>{name}</p>
                      <p>{area}</p>
                      <p>{city}</p>
                      <p>
                        {" "}
                        {state}, {pincode}{" "}
                      </p>
                      <p>{phoneNumber}</p>
                    </div>
                  </div>
                );
              })}
            </ul>

            <button
              className="checkout-address-btn"
              onClick={() => addNewAddressHandler()}
            >
              Add New Address
            </button>
          </div>

          <div className="checkout-order-summary">
            <div>
              <h2>Order Summary</h2>
              <hr className="checkout-hr" />
              <div className="checkout-row">
                <h3>Games ({cart?.length})</h3>
                <h3>Quantity</h3>
              </div>
              {cart?.map(({ _id, title, qty }) => (
                <div key={_id} className="checkout-row">
                  <p>{title}</p>
                  <p>{qty}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="checkout-title">Price Details</h3>
              <hr className="checkout-hr" />
              <div className="checkout-row">
                <p>Total Price</p>
                <p> ₹ {totalPrice}</p>
              </div>
              <div className="checkout-row">
                <p>Total Discount</p>
                <p>₹ {discountedPrice}</p>
              </div>
              <div className="checkout-row">
                <p>Grand Total</p>
                <h3> ₹ {totalPrice - discountedPrice}</h3>
              </div>
            </div>

            {selectedAddressId !== null && (
              <div className="selected-delivery-address">
                <h3 className="checkout-title">Delivery Details</h3>
                <hr className="selected-address-hr" />
                <h3>{selectedAddress.name}</h3>
                <p>{selectedAddress.area}</p>
                <p>
                  {selectedAddress.city}, {selectedAddress.state},{" "}
                  {selectedAddress.pincode}
                </p>
                <p>{selectedAddress.phoneNumber}</p>
              </div>
            )}

            <button onClick={() => placeOrderHandler()}>Place Order</button>
          </div>

          {addNewAddress && (
            <div className="checkout-profile-address-form">
              <AddressForm />
            </div>
          )}
        </div>
      </div>

      {/* </div> */}
    </>
  );
};
