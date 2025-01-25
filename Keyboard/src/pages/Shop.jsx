import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from './ShopData'; // Keyboards
import { switches } from './Switches'; // Switches
import { keycaps } from './Keycaps'; // Keycaps

const Shop = () => {
  const [currentCategory, setCurrentCategory] = useState('Keyboards');

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const getCategoryData = () => {
    switch (currentCategory) {
      case 'Keyboards':
        return products;
      case 'Switches':
        return switches;
      case 'Keycaps':
        return keycaps;
      default:
        return [];
    }
  };

  const categoryData = getCategoryData();

  return (
    <div className="shop">
      <h2 className="shop-title">Shop Our Products</h2>

      {/* Category Buttons */}
      <div className="category-buttons">
        {['Keyboards', 'Switches', 'Keycaps'].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`category-button ${currentCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {categoryData.map((item) => (
          <div key={item.id} className="product-card">
            <img
              src={item.image || '/placeholder-image.jpg'}
              alt={item.name}
              className="product-image"
            />
            <h3 className="product-title">{item.name}</h3>
            <p className="product-description">{item.description}</p>
            <p className="product-price">${item.price}</p>
            <Link
              to={`/product/${item.id}`}
              state={item}
              className="view-product-button"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
