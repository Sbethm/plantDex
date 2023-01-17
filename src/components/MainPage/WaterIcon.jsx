import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function WaterIcon(props) {
    const waterValue = props.waterValue;
    console.log(waterValue)

    const getWaterIcon = () => {
        switch(waterValue) {
            case 'dry':
               return <FontAwesomeIcon className='plantCard--image' icon="droplet" />
            case 'moist':
               return <FontAwesomeIcon className='plantCard--image' icon="glass-water" />
            case 'wet':
               return <FontAwesomeIcon className='plantCard--image' icon="cloud-showers-water" />
        }
    }

    const waterIcon = getWaterIcon();

    return (
        <>
          { waterIcon }
        </>
    )
}