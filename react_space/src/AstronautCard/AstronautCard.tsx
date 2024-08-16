import React from 'react';
import Astronaut from './Astronaut.png'
import './AstronautCard.css'

interface AstronautCardProps {
  image: string;
  name: string;
  role: string;
}

const AstronautCard: React.FC<AstronautCardProps> = ({ name, role }) => {
  return (
    <div className="astronaut-card">
      <img src={Astronaut} alt={name} className="astronaut-image" />
      <h3 className="astronaut-role">{role}</h3>
      <p className="astronaut-name">{name}</p>
    </div>
  );
};

export default AstronautCard;
