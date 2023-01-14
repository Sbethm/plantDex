import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function PlantCard(props) {


  return (
      <article className='plantCard--container'>
          <div className='plantCard--header'>
            <h3>{ props.nickName }</h3>
            <p className='plant--detail'>{ props.birthday }</p>
          </div>
          <ul>
            
            <p className='plant--detail'><span>Type:</span> { props.plantName }</p>
            <p className='plant--detail'><span>Water:</span> { props.water }</p>
            <FontAwesomeIcon icon="seedling" />
            {/* <li className='plant-detail'>Sunlight:{ props.water }</li> */}
            
            {/* <li className='plant-detail'>Notes:</li> */}
          </ul>
      </article>
  )


}

export default PlantCard;