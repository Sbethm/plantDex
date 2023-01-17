import React from 'react';
import WaterIcon from './WaterIcon.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PlantDetails(props) {
    const setPlants = props.setPlants;
    const plants = props.plants;
    const closeModal = props.closeModal;

    const deletePlant = () => {
        fetch('/plant', {
            method: 'delete',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                nickname: props.plantInfo.nickname          
            })
        })
        //update the GardenContainer component
        fetch('/plant')
        .then((data) => data.json())
        .then((plantData) => {
            console.log('Your plants made it to the frontend!', plantData[0].nickname);
            setPlants(plantData);
        })
        .catch(err => console.log("Error on frontend fetching", err))
        //close PlantDetail modal
        closeModal();
    }

    return (
        <>
            <article className='modal--container' onClick={ props.handleEvent } >
                <div className='plantCard--header'>
                    <div className='title-water'>
                    <h3>{ props.plantInfo.nickname }</h3>
                    <WaterIcon waterValue={props.plantInfo.water} />
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
                <button className='alert--btn' onClick={ deletePlant }>Delete</button>
            </div>
        </>
    )
}