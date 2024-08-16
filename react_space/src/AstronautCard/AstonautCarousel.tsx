import React, { useState } from 'react';
import AstronautCard from './AstronautCard';
import './AstronautCarousel.css'

interface AstronautCarouselProps {
  astronauts: { image: string; name: string; role: string }[];
}

const AstronautCarousel: React.FC<AstronautCarouselProps> = ({ astronauts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextCard = () => {
    if (currentIndex < astronauts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-controls">
        <button 
          className={`arrow-button ${currentIndex === 0 ? 'disabled' : ''}`} 
          onClick={prevCard}
          disabled={currentIndex === 0}
        >
          &#8592;
        </button>
        <button 
          className={`arrow-button ${currentIndex === astronauts.length - 1 ? 'disabled' : ''}`} 
          onClick={nextCard}
          disabled={currentIndex === astronauts.length - 1}
        >
          &#8594;
        </button>
      </div>
      <div className="carousel-cards">
        {astronauts.map((astronaut, index) => (
          <div key={index} className={`carousel-card ${index === currentIndex ? 'active' : 'hidden'}`}>
            <AstronautCard {...astronaut} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AstronautCarousel;
