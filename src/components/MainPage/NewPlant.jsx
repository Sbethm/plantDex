import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function NewPlant(props) {

    const onSubmit = () => {

    }

    return (
        <div className='newPlant--container'>
            <button onClick={ props.setShowModal }>X</button>
            {/* <form action="" onClick={ onSubmit }>
                <div className='plantCard--header'>
                    <div className='title-water'>
                        <label htmlFor="nickname">Nickname:</label>
                        <input type="text" name="nickname" />
                        <label htmlFor="water"> How much water does it drink?</label>
                        <select name="water" id="water-values">
                            <option value="dry">
                                <FontAwesomeIcon className='plantCard--image' icon="droplet" />
                                Dry
                            </option>
                            <option value="Moist">
                                <FontAwesomeIcon className='plantCard--image' icon="glassWater" />
                                Moist
                            </option>
                            <option value="Wet">
                                <FontAwesomeIcon className='plantCard--image' icon="cloudShowersWater" />
                                Wet
                            </option>
                        </select>
                    </div>
                    <p className='plant--detail'>{  }</p>
                </div>
                <div className='plantCard--details'>          
                    <FontAwesomeIcon className='plantCard--image' icon="seedling" />
                    <label htmlFor="type">Type:</label>
                    <input type="text" name="type" />
                </div>
            </form> */}
        </div>
    )
}