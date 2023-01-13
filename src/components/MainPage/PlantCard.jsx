import React from 'react';

function PlantCard(props) {


  return (
      <article>
          <div className='plant-nickname-container'>
            <h3>Your Plants Nickname</h3>
          </div>
          <ul>
            <li className='plant-detail'>Name:{ props.nickName }</li>
            <li className='plant-detail'>Water Schedule:{ props.plantName }</li>
            <li className='plant-detail'>Sunlight:{ props.water }</li>
            <li className='plant-detail'>Collected Day:{ props.birthday }</li>
            <li className='plant-detail'>Notes:</li>
          </ul>
      </article>
  )


}

export default PlantCard;