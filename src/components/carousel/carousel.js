import React, { useState, useEffect } from 'react';
import carousel_image from '../../assets/images/account-creation-login/main-image2.png';
import '../../index.css';

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
      className="relative"
      style={{width: '850px', height: '850px', top:'30px'}}
      onMouseDown={() => setIsPaused(true)} // Pause carousel on mouse down
      onMouseUp={() => setIsPaused(false)} // Resume carousel on mouse up
      onMouseLeave={() => setIsPaused(false)} // Resume carousel on mouse leave
    >
      {/* Background image for the carousel */}
      <img src={carousel_image} alt="background" className="w-full h-full object-cover" />
      <div className="absolute" style={{ color:'#FFFFFF', width: '209px', height: '151px', top: '370px', left: '321px', gap: '30px' }}>
        {/* Container for the text of the current slide */}
        <div className="text_container h3" style={{ width:'209px', height: '111px' }}>
          {carouselTexts[currentIndex]}
        </div>
        {/* Navigation dots for the carousel */}
        <div className="absolute inset-x-0 bottom-0 mx-auto" style={{ width: '50px', height: '10px' }}>
          <div className="flex items-center justify-center" style={{ gap: "10px" }}>
            {carouselTexts.map((_, i) => (
              // Dot for each carousel slide
              <div
                key={i}
                className={`cursor-pointer transition-all w-3 h-3 rounded-full ${currentIndex === i ? 'bg-white' : 'bg-opacity-50'}`}
                style={{ backgroundColor: currentIndex === i ? '#FFFFFF' : '#008080' }}
                onClick={() => setIndex(i)} // Set carousel to display the slide corresponding to the dot
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
