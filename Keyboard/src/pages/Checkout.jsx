import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <div className="checkout">
      <div className="checkout-container">
        <h1 className="checkout-title">Checkout</h1>
        <p className="checkout-subtitle">
          Review your order and fill out the details below to complete your purchase.
        </p>

        <div className="checkout-content">
          {/* Order Summary */}
          <div className="checkout-summary">
            <h2 className="summary-title">Order Summary</h2>
            <ul className="summary-list">
              {cart.map((item) => (
                <li key={item.id} className="summary-item">
                  <div className="summary-product">
                    {/* Product Name */}
                    <strong>{item.name}</strong>
                  </div>

                  {/* Product Details */}
                  <div className="summary-details">
                    {item.selectedOptions ? (
                      <ul>
                        {item.selectedOptions.switch && (
                          <li>
                            <strong>Switch: </strong> {item.selectedOptions.switch}
                          </li>
                        )}
                        {item.selectedOptions.keycap && (
                          <li>
                            <strong>Keycap: </strong> {item.selectedOptions.keycap}
                          </li>
                        )}
                        {item.selectedOptions.boardColor && (
                          <li>
                            <strong>Board Color: </strong> {item.selectedOptions.boardColor}
                          </li>
                        )}
                      </ul>
                    ) : (
                      <span>Standard Product</span>
                    )}
                  </div>

                  {/* Product Price */}
                  <span className="summary-price">${item.price}</span>
                </li>
              ))}
              {/* Total */}
              <li className="summary-total">
                <span>Total</span>
                <span>${total}</span>
              </li>
            </ul>
          </div>

          {/* Checkout Form */}
          <form className="checkout-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                rows="4"
                placeholder="Enter your shipping address"
                required
              ></textarea>
            </div>
            <button type="submit" className="checkout-btn">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
