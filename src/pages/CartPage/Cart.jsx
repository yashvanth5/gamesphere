import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext/CartContext";

import { NavLink } from "react-router-dom";

import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";

import { CartCard } from "../../components/CartCard/CartCard";

export const Cart = () => {
  const {
    cartState,
    totalPrice,
    discountedPrice,
    isErrorGamesCart,
    isLoadingGamesCart,
  } = useContext(CartContext);

  return (
    <>
      <div className="cart-page">
        <h1 className="cart-heading">CART</h1>

        {isLoadingGamesCart ? (
          <Loader />
        ) : isErrorGamesCart ? (
          <Error />
        ) : (
          <div>
            {cartState?.cart.length > 0 ? (
              <div className="cart-block">
                <div className="cart-items">
                  {cartState.cart?.map((game) => (
                    <CartCard game={game} key={game._id} />
                  ))}
                </div>

                <div className="cart-block-price-detail">
                  <div className="cart-block-price-detail-heading">
                    <h2 className="cart-block-price-detail-title">
                      Price Details
                    </h2>
                    <div className="cart-block-price-details-count-box">
                      {cartState.cart.length > 1 ? (
                        <h2 className="cart-block-price-details-count">
                          ({cartState.cart.length} items)
                        </h2>
                      ) : (
                        <h2>({cartState.cart.length} item)</h2>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="cart-block-price-detail-total">
                    <p>Total Price</p>
                    <p>₹ {totalPrice}</p>
                  </div>
                  <div className="cart-block-price-detail-discount">
                    <p>Discount</p>
                    <p>₹ {discountedPrice}</p>
                  </div>
                  <hr />
                  <div className="card-block-price-details-final">
                    <div className="card-block-price-details-final-subtotal">
                      <h3>Subtotal</h3>
                      <h3>₹ {totalPrice - discountedPrice}</h3>
                    </div>
                  </div>
                  <NavLink to="/checkout">
                    <button className="card-block-price-details-final-btn">
                      {" "}
                      <h2>Checkout</h2>
                    </button>
                  </NavLink>
                </div>
              </div>
            ) : (
              <div className="cart-empty-box">
                <h2 className="cart-empty">Oops! Your cart is empty! </h2>
                <NavLink to="/store">
                  {" "}
                  <button className="cart-continue-shop">
                    Continue Shopping!
                  </button>
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
