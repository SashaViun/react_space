import React, { useEffect, useState } from 'react';
import RocketCard from '../RocketCard/RocketCard';
import './RocketCarousel.css';
import { useNavigate } from 'react-router-dom';


export interface RocketData {
  name: string;
  height_w_trunk: {
      meters: number;
      feet: number;
  };
  diameter: {
      meters: number;
      feet: number;
  };
  pressurized_capsule: {
      payload_volume: {
          cubic_meters: number;
          cubic_feet: number;
      };
  };
  trunk: {
      trunk_volume: {
          cubic_meters: number;
          cubic_feet: number;
      };
  };
  launch_payload_mass: {
      kg: number;
      lb: number;
  };
  return_payload_mass: {
      kg: number;
      lb: number;
  };
}


const RocketCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rocketsData, setRocketsData] = useState<RocketData[]>([]);
  const navigate = useNavigate();
  const handleCardClick = (rocketIndex: number) => {
    navigate(`/rocket/${rocketIndex}`);
};

// const [previousIndex, setPreviousIndex] = useState(0);
// const [nextIndex, setNextIndex] = useState(0);
const previousIndex = (currentIndex - 1 + rocketsData.length) % rocketsData.length;
const nextIndex = (currentIndex + 1) % rocketsData.length;
const visibleRockets = rocketsData.length === 2 
    ? [rocketsData[previousIndex], rocketsData[currentIndex], rocketsData[nextIndex]]
    : [
      rocketsData[previousIndex],
      rocketsData[currentIndex],
      rocketsData[nextIndex]
      ];

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/dragons')
        .then((response) => response.json())
        .then((data) => {
            const rockets = [...data, {...data[0], name: 'Dragon 1'}, {...data[1], name: 'Dragon 2'}] 
            setRocketsData(rockets)
        })
        .catch((error) => console.error('Error fetching rocket data:', error));
}, []);

  return (
    <div className="carousel-container">
      <button onClick={() => setCurrentIndex(previousIndex)} className="carousel-control prev">❮</button>
      <div className="carousel">
        <div
          className="carousel-slides"
        >
          {visibleRockets.map((rocketData, index) => {
          let className = 'carousel-item';

          if (index === 0) {
            className += ' previous';
          } else if (index === 1) {
            className += ' current';
          } else if (index === 2) {
            className += ' next';
          }
          return <div className={className}><RocketCard rocketData={rocketData} handleCardClick={() => handleCardClick(index)}/></div>
            })}
    
        </div>
      </div>
      <button onClick={() => setCurrentIndex(nextIndex)} className="carousel-control next">❯</button>
      <div className="carousel-indicators">
        {rocketsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default RocketCarousel;
