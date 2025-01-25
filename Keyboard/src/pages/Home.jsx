import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroImage from '../assets/generated_hero.jpg';
import { products } from './ShopData';

const Home = () => {
  const navigate = useNavigate();
  const bestSellers = products.slice(0, 3);
  const [activeFAQ, setActiveFAQ] = useState(null); // Track the active FAQ item

  const handleCategoryClick = (category) => {
    navigate(`/shop?category=${category}`);
  };

  const toggleFAQ = (index) => {
    setActiveFAQ((prev) => (prev === index ? null : index)); // Toggle FAQ visibility
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="overlay">
          <h1 className="hero-title">Experience the Ultimate Keyboard World</h1>
          <p className="hero-subtitle">Precision and Comfort for Every Keystroke</p>
          <Link to="/shop" className="hero-button">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Categories Section */}
      <section className="categories">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          <button
            className="category-button"
            onClick={() => handleCategoryClick('Keyboards')}
          >
            Keyboards
          </button>
          <button
            className="category-button"
            onClick={() => handleCategoryClick('Switches')}
          >
            Switches
          </button>
          <button
            className="category-button"
            onClick={() => handleCategoryClick('Keycaps')}
          >
            Keycaps
          </button>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="best-sellers">
        <h2 className="section-title">Best Selling Products</h2>
        <div className="best-sellers-grid">
          {bestSellers.map((product) => (
            <div key={product.id} className="best-seller-item">
              <img
                src={product.image}
                alt={product.name}
                className="best-seller-image"
              />
              <h3 className="best-seller-title">{product.name}</h3>
              <p className="best-seller-description">{product.description}</p>
              <button
                className="best-seller-button"
                onClick={() => navigate(`/product/${product.id}`, { state: product })}
              >
                View Product
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Section */}
      <section className="promotions">
        <h2 className="section-title">Limited Time Offers</h2>
        <div className="promotions-grid">
          <div className="promotion-item">
            <h3>Free Shipping</h3>
            <p>Get free shipping on orders over $100. Limited time only!</p>
          </div>
          <div className="promotion-item">
            <h3>20% Off Keyboards</h3>
            <p>Use code <strong>KEYVIBES20</strong> at checkout to save 20% on all keyboards.</p>
          </div>
          <div className="promotion-item">
            <h3>Buy 2, Get 1 Free</h3>
            <p>Mix and match any switches or keycaps. Add 3 to your cart to redeem this offer.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 className="section-title">Why Choose KeyVibes?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Unmatched Quality</h3>
            <p>
              Crafted with premium materials to provide durability and enhance your typing
              experience.
            </p>
          </div>
          <div className="feature-item">
            <h3>Customizable Options</h3>
            <p>
              Personalize your setup with customizable switches, keycaps, and lighting.
            </p>
          </div>
          <div className="feature-item">
            <h3>Exceptional Support</h3>
            <p>
              Our team is dedicated to helping you find the perfect keyboard for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-items">
          {[
            {
              question: 'Do you ship internationally?',
              answer:
                'Yes, we ship to most countries worldwide. Shipping rates and delivery times vary.',
            },
            {
              question: 'Are your keyboards hot-swappable?',
              answer:
                'Yes, our premium models support hot-swapping for ultimate customization.',
            },
            {
              question: 'What payment methods do you accept?',
              answer:
                'We accept credit cards, PayPal, and other popular payment options.',
            },
          ].map((faq, index) => (
            <div key={index} className="faq-item">
              <h3
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-toggle">
                  {activeFAQ === index ? '-' : '+'}
                </span>
              </h3>
              {activeFAQ === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2 className="section-title">Join Our Newsletter</h2>
        <p>Stay updated on the latest products, deals, and tips from KeyVibes.</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
