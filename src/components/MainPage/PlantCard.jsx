import React, { Component } from 'react';

function PlantCard() {

  return (
      <article>
          <div className='plant-nickname-container'>
            <h3>Your Plants Nickname</h3>
          </div>
          <ul>
            <li className='plant-detail'>Name:</li>
            <li className='plant-detail'>Water Schedule:</li>
            <li className='plant-detail'>Sunlight:</li>
            <li className='plant-detail'>Collected Day:</li>
            <li className='plant-detail'>Notes:</li>
          </ul>
      </article>
  )


}

export default PlantCard;