import React, { useState } from 'react';
import Header from './Header.jsx';
import GardenContainer from './GardenContainer.jsx';

function MainPage() {
  const [ plants, setPlants ] = useState(null);

  return (
    <div className='mainpage--container'>
      <Header 
        setPlants={ setPlants } 
        plants={plants} 
      />
      <GardenContainer 
        setPlants={ setPlants }   
        plants={plants} 
      />
    </div>
    
  )
}

export default MainPage;