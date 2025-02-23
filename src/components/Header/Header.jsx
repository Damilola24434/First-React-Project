import React, { useState } from "react";
import "./Header.css";

// Importing images from the assets folder
import food1 from "../../assets/food_1.png";
import food2 from "../../assets/food_2.png";
import food3 from "../../assets/food_3.png";
import food4 from "../../assets/food_4.png";
import food5 from "../../assets/food_5.png";

const images = [food1, food2, food3, food4, food5];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="header">
      {/* Header Content */}
      <div className="header-contents">
        <h2>Order Your Favorite Food Here</h2>
        <p>
          Welcome to Chop Shop, where every dish is a masterpiece! Whether you're craving a quick bite or a full-course meal, we've got you covered.
        </p>
      </div>

      {/* Food Carousel */}
      <div className="food-carousel">
        <button className="carousel-arrow left" onClick={prevSlide}>&#10094;</button>
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img key={index} src={image} alt="Food" className="carousel-image" />
        ))}
        <button className="carousel-arrow right" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default Header;