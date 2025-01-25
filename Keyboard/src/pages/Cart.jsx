import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, total, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePurchase = () => {
    // Redirect to the checkout page
    navigate("/checkout");
  };

  return (
    <div className="cart">
      <div className="cart-container">
        <h1 className="cart-title">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Details</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    {/* Product Name */}
                    <td className="cart-product-name">
                      <strong>{item.name}</strong>
                    </td>

                    {/* Product Details */}
                    <td className="cart-product-details">
                      {item.selectedOptions ? (
                        <ul>
                          {item.selectedOptions.switch && (
                            <li>
                              <strong>Switch:</strong> {item.selectedOptions.switch}
                            </li>
                          )}
                          {item.selectedOptions.keycap && (
                            <li>
                              <strong>Keycap:</strong> {item.selectedOptions.keycap}
                            </li>
                          )}
                          {item.selectedOptions.boardColor && (
                            <li>
                              <strong>Board Color:</strong> {item.selectedOptions.boardColor}
                            </li>
                          )}
                        </ul>
                      ) : (
                        <span>Standard Product</span>
                      )}
                    </td>

                    {/* Price */}
                    <td>${item.price}</td>

                    {/* Quantity */}
                    <td>{item.quantity}</td>

                    {/* Total */}
                    <td>${item.price * item.quantity}</td>

                    {/* Actions */}
                    <td>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Total and Actions */}
            <div className="cart-actions">
              <h3 className="cart-total">Total: ${total}</h3>
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="purchase-btn" onClick={handlePurchase}>
                Purchase Items
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
