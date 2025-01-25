import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const location = useLocation();
  const { state: product } = location;
  const { addToCart } = useContext(CartContext);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showNotification, setShowNotification] = useState(false);

  const handleOptionChange = (optionType, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionType]: value,
    }));
  };

  const handleAddToCart = () => {
    const productToAdd = { ...product, selectedOptions };
    addToCart(productToAdd);

    // Show notification
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        {/* Left Column: Product Image */}
        <div className="product-image-container">
          <div className="product-image-wrapper">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </div>
        </div>

        {/* Right Column: Product Information */}
        <div className="product-info-container">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>

          {/* Specifications */}
          <div className="product-specs">
            <h3>Specifications</h3>
            <ul>
              <li>
                <strong>Connectivity:</strong> {product.connectivity}
              </li>
              <li>
                <strong>Lighting:</strong> {product.lighting}
              </li>
              <li>
                <strong>Warranty:</strong> {product.warranty}
              </li>
            </ul>
          </div>

          {/* Key Features */}
          {product.keyFeatures && (
            <div className="product-features">
              <h3>Key Features</h3>
              <ul>
                {product.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Customization Options */}
          {product.customOptions && (
            <div className="product-customization">
              <h3>Customization Options</h3>
              {product.customOptions.switches && (
                <div className="custom-option">
                  <h4>Switches:</h4>
                  <div className="options-grid">
                    {product.customOptions.switches.map((switchOption) => (
                      <button
                        key={switchOption}
                        className={`option-button ${
                          selectedOptions.switch === switchOption
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          handleOptionChange("switch", switchOption)
                        }
                      >
                        {switchOption}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {product.customOptions.keycaps && (
                <div className="custom-option">
                  <h4>Keycaps:</h4>
                  <div className="options-grid">
                    {product.customOptions.keycaps.map((keycapOption) => (
                      <button
                        key={keycapOption}
                        className={`option-button ${
                          selectedOptions.keycap === keycapOption
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          handleOptionChange("keycap", keycapOption)
                        }
                      >
                        {keycapOption}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {product.customOptions.boardColors && (
                <div className="custom-option">
                  <h4>Board Colors:</h4>
                  <div className="options-grid">
                    {product.customOptions.boardColors.map((colorOption) => (
                      <button
                        key={colorOption}
                        className={`option-button ${
                          selectedOptions.boardColor === colorOption
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          handleOptionChange("boardColor", colorOption)
                        }
                      >
                        {colorOption}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Add to Cart Button */}
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>

          {/* Notification */}
          {showNotification && (
            <div className="notification">
              {product.name} has been added to the cart!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
