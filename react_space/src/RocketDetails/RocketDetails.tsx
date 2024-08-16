import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RocketDetails.css';
import Rocket from './Rocket.gif'

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
    // Додайте інші поля, які потрібні для відображення
}

const RocketDetails: React.FC = () => {
    const { rocketId } = useParams<{ rocketId: string }>();
    const [rocketData, setRocketData] = useState<RocketData | null>(null);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/dragons')
            .then((response) => response.json())
            .then((data) => {
                setRocketData(data[parseInt(rocketId as string, 10)]);
            })
            .catch((error) => console.error('Error fetching rocket data:', error));
    }, [rocketId]);

    if (!rocketData) return <div>Loading...</div>;

    return (
        <>
        <h1 className='rocket-name'>{rocketData.name.toUpperCase()}</h1>
        <div className="rocket-details">
            <div>
                <img src={Rocket} alt="rocket" className='image-content'/>
            </div>
            <div className="rocket-info">
            <h2>{rocketData.name.toUpperCase()}</h2>
                <p>HEIGHT: {rocketData.height_w_trunk.meters} M / {rocketData.height_w_trunk.feet} FT</p>
                <p>DIAMETER: {rocketData.diameter.meters} M / {rocketData.diameter.feet} FT</p>
                <p>SPACECRAFT VOLUME: {rocketData.pressurized_capsule.payload_volume.cubic_meters} M³ / {rocketData.pressurized_capsule.payload_volume.cubic_feet} FT³</p>
                <p>TRUNK VOLUME: {rocketData.trunk.trunk_volume.cubic_meters} M³ / {rocketData.trunk.trunk_volume.cubic_feet} FT³</p>
                <p>LAUNCH PAYLOAD MASS: {rocketData.launch_payload_mass.kg} KG / {rocketData.launch_payload_mass.lb} LBS</p>
                <p>TRUNK VOLUME: {rocketData.trunk.trunk_volume.cubic_meters} M³ / {rocketData.trunk.trunk_volume.cubic_feet} FT³</p>
                <p>LAUNCH PAYLOAD MASS: {rocketData.launch_payload_mass.kg} KG / {rocketData.launch_payload_mass.lb} LBS</p>
                <p>RETURN PAYLOAD MASS: {rocketData.return_payload_mass.kg} KG / {rocketData.return_payload_mass.lb} LBS</p>
                <p>RETURN PAYLOAD MASS: {rocketData.return_payload_mass.kg} KG / {rocketData.return_payload_mass.lb} LBS</p>
                <p>SPACECRAFT VOLUME: {rocketData.pressurized_capsule.payload_volume.cubic_meters} M³ / {rocketData.pressurized_capsule.payload_volume.cubic_feet} FT³</p>
                <p>RETURN PAYLOAD MASS: {rocketData.return_payload_mass.kg} KG / {rocketData.return_payload_mass.lb} LBS</p>
            </div>
        </div>
        </>
    );
}

export default RocketDetails;
