import './AstronautCard.css'
import Astronaut from './Astronaut.png'

interface CardComponentProps {
    title: string;
    name: string;
  }
  
  const AstronautCard: React.FC<CardComponentProps> = ({ title, name }) => {
    return (
      <div className="card">
        <img src={Astronaut} alt={'astro'} className="card-image" />
        <div className="card-text">
          <h3 className="card-title">{title}</h3>
          <h2 className="card-name">{name}</h2>
        </div>
      </div>
    );
  }

export default AstronautCard