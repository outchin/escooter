import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/hero_text.css"; // Import CSS file

const backgroundImages = [
  require("../assets/images/wallpp.webp"),
  require("../assets/images/wallpp1.webp"),
  require("../assets/images/wallpp3.webp"),
  require("../assets/images/wallpp4.webp"),
]; 

const HeroText = () => {
  const [bgIndex, setBgIndex] = useState(0);

  const nextSlide = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setBgIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="hero-container"
      style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}
    >
      {/* Background Image with Animation */}
      <motion.div
        key={bgIndex}
        className="hero-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Navigation Buttons at Leftmost and Rightmost */}
      <button className="hero-button left" onClick={prevSlide}>&#9664;</button>
      <button className="hero-button right" onClick={nextSlide}>&#9654;</button>

      {/* Text Content */}
      {/* <div className="hero-text-container">
        <motion.h1
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ride Smarter ,           Save Future

        </motion.h1>
        <motion.h2
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Save Future
        </motion.h2>
      </div> */}
    </section>
  );
};

export default HeroText;
