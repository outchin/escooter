import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SliderImage_1 from "../assets/images/aima_tran-Photoroom.png";
import SliderImage_2 from "../assets/images/call_to_action-Photoroom.png";
import SliderImage_3 from "../assets/images/Aima_a700-Photoroom.png";

const images = [
  SliderImage_1,
  SliderImage_2,
  SliderImage_3,
  
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt="Hero Slider"
        className="hero-image"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
};

export default HeroSlider;
