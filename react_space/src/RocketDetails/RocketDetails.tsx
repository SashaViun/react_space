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
            <div className="rocket-info_d">
            <h2>{rocketData.name.toUpperCase()}</h2>
                <div className='rocket_info_container'><p>HEIGHT:</p><p>{rocketData.height_w_trunk.meters} M / {rocketData.height_w_trunk.feet} FT</p></div>
                <div className='rocket_info_container'><p>DIAMETER:</p><p>{rocketData.diameter.meters} M / {rocketData.diameter.feet} FT</p></div>
                <div className='rocket_info_container'><p>SPACECRAFT VOLUME:</p><p>{rocketData.pressurized_capsule.payload_volume.cubic_meters} M³ / {rocketData.pressurized_capsule.payload_volume.cubic_feet} FT³</p></div>
                <div className='rocket_info_container'><p>TRUNK VOLUME:</p><p>{rocketData.trunk.trunk_volume.cubic_meters} M³ / {rocketData.trunk.trunk_volume.cubic_feet} FT³</p></div>
                <div className='rocket_info_container'><p>LAUNCH PAYLOAD MASS:</p><p>{rocketData.launch_payload_mass.kg} KG / {rocketData.launch_payload_mass.lb} LBS</p></div>
                <div className='rocket_info_container'><p>TRUNK VOLUME:</p><p>{rocketData.trunk.trunk_volume.cubic_meters} M³ / {rocketData.trunk.trunk_volume.cubic_feet} FT³</p></div>
                <div className='rocket_info_container'><p>LAUNCH PAYLOAD MASS:</p><p>{rocketData.launch_payload_mass.kg} KG / {rocketData.launch_payload_mass.lb} LBS</p></div>
                <div className='rocket_info_container'><p>RETURN PAYLOAD MASS:</p><p>{rocketData.return_payload_mass.kg} KG / {rocketData.return_payload_mass.lb} LBS</p></div>
                <div className='rocket_info_container'><p>RETURN PAYLOAD MASS:</p><p>{rocketData.return_payload_mass.kg} KG / {rocketData.return_payload_mass.lb} LBS</p></div>
                <div className='rocket_info_container'><p>SPACECRAFT VOLUME:</p><p>{rocketData.pressurized_capsule.payload_volume.cubic_meters} M³ / {rocketData.pressurized_capsule.payload_volume.cubic_feet} FT³</p></div>
                <div className='rocket_info_container'><p>RETURN PAYLOAD MASS:</p><p>{rocketData.return_payload_mass.kg} KG / {rocketData.return_payload_mass.lb} LBS</p></div>
            </div>
        </div>
        </>
    );
}

export default RocketDetails;
