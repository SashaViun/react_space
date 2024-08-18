import React from 'react';
import './RocketCard.css';
import Rocket from './Rocket.gif'
import { RocketData } from '../RocketCarousel/RocketCarousel';

interface RocketCardProps {
    rocketData: RocketData;
    handleCardClick: () => void;
}

const RocketCard: React.FC<RocketCardProps> = ({ rocketData, handleCardClick}) => {
    if (!rocketData) return <div>Loading...</div>;

    return (
        <div className="rocket-card" onClick={handleCardClick}>
            <div className="rocket-image">
                <img src={Rocket} alt="Rocket" />
            </div>
            <div className="rocket-info">
                <h2>{rocketData.name.toUpperCase()}</h2>
                <div className='rocket_info_container'><p>HEIGHT:</p><p>{rocketData.height_w_trunk.meters} M / {rocketData.height_w_trunk.feet} FT</p></div>
                <div className='rocket_info_container'><p>DIAMETER:</p><p>{rocketData.diameter.meters} M / {rocketData.diameter.feet} FT</p></div>
                <div className='rocket_info_container'><p>SPACECRAFT VOLUME:</p><p>{rocketData.pressurized_capsule.payload_volume.cubic_meters} M³ / {rocketData.pressurized_capsule.payload_volume.cubic_feet} FT³</p></div>
                <div className='rocket_info_container'><p>TRUNK VOLUME:</p><p>{rocketData.trunk.trunk_volume.cubic_meters} M³ / {rocketData.trunk.trunk_volume.cubic_feet} FT³</p></div>
                <div className='rocket_info_container'><p>LAUNCH PAYLOAD MASS:</p><p>{rocketData.launch_payload_mass.kg} KG / {rocketData.launch_payload_mass.lb} LBS</p></div>
                <div className='rocket_info_container'><p>RETURN PAYLOAD MASS:</p><p>{rocketData.return_payload_mass.kg} KG / {rocketData.return_payload_mass.lb} LBS</p></div>
            </div>
        </div>
    );
}

export default RocketCard;
