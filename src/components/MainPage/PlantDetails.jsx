import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PlantDetails(props) {
    return (
        <>
            <article className='modal--container' onClick={ props.handleEvent } >
                <div className='plantCard--header'>
                    <div className='title-water'>
                    <h3>{ props.plantInfo.nickname }</h3>
                    <FontAwesomeIcon className='plantCard--image' icon="droplet" />
                    </div>
                    <p className='plant--detail'>{ props.plantInfo.adoptday }</p>
                </div>
                <div className='plantCard--details'>          
                    <FontAwesomeIcon className='plantCard--image' icon="seedling" />
                    <p className='plant--detail'><span>Type:</span> { props.plantInfo.type }</p>
                </div>
            </article>
            <div className='plantCard-btn--container'>
                <button className='secondary--btn' onClick={ props.update }>Update</button>
                <button className='alert--btn'>Delete</button>
            </div>
        </>
    )
}