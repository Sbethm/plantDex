import React, { useEffect, useState } from 'react';
import PlantCard from './PlantCard.jsx';

function GardenContainer() {
    const [ plants, setPlants ] = useState(null);

    useEffect(() => {
      fetch('/plant')
      .then((data) => data.json())
      .then((plantData) => {
        console.log('Your plants made it to the frontend!', plantData[0].plantName);
        setPlants(plantData);
      })
      .catch(err => console.log("Error on frontend fe tching", err))
    }, []);


      const displayPlants = plants && plants.map((plant, i) => {
        return (
          <PlantCard 
            key={ i }
            nickName={ plant.nickName} 
            plantName={ plant.plantName } 
            water={ plant.water } 
            birthday={ plant.birthday } 
           />
        )
      });
    
    

    return (
        <div className='garden--container'>
            { displayPlants }
        </div>
    )

}

export default GardenContainer;