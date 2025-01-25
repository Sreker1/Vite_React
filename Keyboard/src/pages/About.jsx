import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h1 className="about-title">About KeyVibes</h1>
        <p className="about-tagline">Crafting the Perfect Keystroke Experience</p>
      </div>

      <section className="about-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-description">
          At KeyVibes, our mission is to bring precision, comfort, and style to your fingertips. Whether you're a gamer, typist, or programmer, we are dedicated to enhancing your experience with premium keyboards tailored to your needs.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-title">Our Journey</h2>
        <p className="section-description">
          Founded in 2025, KeyVibes began as a passion project for keyboard enthusiasts. With a focus on innovation and quality, we have grown into a trusted brand for mechanical keyboards, offering products designed for every user, from beginners to experts.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Unmatched Quality</h3>
            <p>We use only the best materials to ensure our keyboards last through countless keystrokes.</p>
          </div>
          <div className="feature-item">
            <h3>Customizable Options</h3>
            <p>From switches to keycaps, create a keyboard that's uniquely yours.</p>
          </div>
          <div className="feature-item">
            <h3>Exceptional Support</h3>
            <p>Our dedicated team is here to help with all your keyboard needs, from setup to customization.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">Join the KeyVibes Community</h2>
        <p className="section-description">
          Become part of our growing community of keyboard enthusiasts. Share your setups, explore new trends, and connect with like-minded individuals through our social media platforms.
        </p>
      </section>
    </div>
  );
};

export default About;
