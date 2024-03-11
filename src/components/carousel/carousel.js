import React, { useState, useEffect } from 'react';
import carousel_image from '../../assets/images/account-creation-login/main-image2.png';
import "./carousel.css";

// Array of text for the carousel slides
const carouselTexts = [
  'Explore Limitless Opportunities',
  'Connect with Top Employers',
  'Streamlined Application Process',
  // Additional carousel texts can be added here
];

const Carousel = ({ image }) => {
  // State to keep track of the current index of the carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to manage the pause/play status of the carousel
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Exit early if the carousel is paused to stop the slide change
    if (isPaused) {
      return;
    }

    // Interval for automatically cycling through carousel slides every 2 seconds
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
    }, 2000); // Carousel text changes every 2 seconds

    // Cleanup function to clear the interval when the component unmounts or the carousel is paused
    return () => clearInterval(timer);
  }, [isPaused]); // Effect depends on the isPaused state

  // Function to set the carousel to a specific slide
  const setIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="carousel-container"
      onMouseDown={() => setIsPaused(true)}
      onMouseUp={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <img src={carousel_image} alt="background" className="carousel-background" />
      <div className="carousel-text">
        {carouselTexts[currentIndex]}
      </div>
      <div className="carousel-dots">
        {carouselTexts.map((_, i) => (
          <div
            key={i}
            className={`carousel-dot ${currentIndex === i ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );

};

export default Carousel;
