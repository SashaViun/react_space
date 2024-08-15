import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RocketCard.css';
import Rocket from './Rocket.png'

interface RocketData {
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

interface RocketCardProps {
    rocketIndex: number;
}

const RocketCard: React.FC<RocketCardProps> = ({ rocketIndex }) => {
    const [rocketData, setRocketData] = useState<RocketData | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/dragons')
            .then((response) => response.json())
            .then((data) => {
                setRocketData(data[rocketIndex]);
            })
            .catch((error) => console.error('Error fetching rocket data:', error));
    }, [rocketIndex]);

    const handleCardClick = () => {
        navigate(`/rocket/${rocketIndex}`);
    };

    if (!rocketData) return <div>Loading...</div>;

    return (
        <div className="rocket-card" onClick={handleCardClick}>
            <div className="rocket-image">
                <img src={Rocket} alt="Rocket" />
            </div>
            <div className="rocket-info">
                <h2>{rocketData.name.toUpperCase()}</h2>
                <p>HEIGHT: {rocketData.height_w_trunk.meters} M / {rocketData.height_w_trunk.feet} FT</p>
                <p>DIAMETER: {rocketData.diameter.meters} M / {rocketData.diameter.feet} FT</p>
                <p>SPACECRAFT VOLUME: {rocketData.pressurized_capsule.payload_volume.cubic_meters} M³ / {rocketData.pressurized_capsule.payload_volume.cubic_feet} FT³</p>
                <p>TRUNK VOLUME: {rocketData.trunk.trunk_volume.cubic_meters} M³ / {rocketData.trunk.trunk_volume.cubic_feet} FT³</p>
                <p>LAUNCH PAYLOAD MASS: {rocketData.launch_payload_mass.kg} KG / {rocketData.launch_payload_mass.lb} LBS</p>
                <p>RETURN PAYLOAD MASS: {rocketData.return_payload_mass.kg} KG / {rocketData.return_payload_mass.lb} LBS</p>
            </div>
        </div>
    );
}

export default RocketCard;
