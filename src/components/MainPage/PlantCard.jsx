import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function PlantCard(props) {
  //create a function that displays the watering icon for the plants water level
    //props.water
      // values can be twice a week, once a week, once every two weeks
  const plantInfo = {
    nickname: props.nickName,
    water: props.water,
    adoptday: props.adoptday,
    type: props.type
  };

  return (
      <article className='plantCard--container' onClick={ () => props.handleEvent(plantInfo) } >
          <div className='plantCard--header'>
            <div className='title-water'>
              <h3>{ props.nickName }</h3>
              <FontAwesomeIcon className='plantCard--image' icon="droplet" />
            </div>
            <p className='plant--detail'>{ props.birthday }</p>
          </div>
          <div className='plantCard--details'>          
            <FontAwesomeIcon className='plantCard--image' icon="seedling" />
            <p className='plant--detail'><span>Type:</span> { props.plantName }</p>
          </div>
      </article>
  )


}

export default PlantCard;