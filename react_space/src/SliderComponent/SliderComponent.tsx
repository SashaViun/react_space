import React, { useState } from 'react';
import './SliderComponent.css';
import AstronautCard from '../AstronautCard/AstronautCard';
import arrow from './VectorLeft.png'
import arrow2 from './VectorRight.png'

const cards = [
  { title: 'ST. MECHANIC', name: 'DAVE JOHNSON' },
  { title: 'ST. MECHANIC', name: 'JOHN CLAYTON' },
  { title: 'ST. MECHANIC', name: 'J123' }
];

const TeamSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousIndex = (currentIndex - 1 + cards.length) % cards.length;
  const nextIndex = (currentIndex + 1) % cards.length;
  const visibleCards = cards.length === 1 
    ? [cards[currentIndex]] 
    : [cards[currentIndex], cards[nextIndex]];

  return (
    <div className="team-slider">
      <div className="team-text">
        <h1 className="team-title">TEAM</h1>
        <p className="team-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor sed urna a faucibus. 
          <p>Pellentesque mi nisl, mollis convallis metus id, congue semper neque.</p> 
          Sed suscipit eget ipsum ut gravida. Fusce
        </p>
      </div>
      <div className="team_carousel-container">
        {visibleCards.map((card) => {
          return (
            <div className="team_carousel">
              <AstronautCard title={card.title} name={card.name} />
            </div>
          )
        })}
        <div className="team_carousel-buttons">
          <button onClick={() => setCurrentIndex(previousIndex)} className="team_carousel-button"><img src={arrow} alt="arrow" className='arrow' /></button>
          <button onClick={() => setCurrentIndex(nextIndex)} className="team_carousel-button"><img src={arrow2} alt="arrow2" className='arrow'/></button>
        </div>
      </div>
    </div>
  );
}

export default TeamSlider;
