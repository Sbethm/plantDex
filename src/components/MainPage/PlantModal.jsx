import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function PlantModal(props) {
    console.log(props.plantInfo)

    return (
        <div className='spot'>
            <article className='plantCard--container' onClick={ props.handleEvent } >
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
            <button>Update</button>
            <button>Delete</button>
        </div>
    )
}