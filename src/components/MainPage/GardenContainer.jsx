import React, { useEffect, useState } from 'react';
import PlantCard from './PlantCard.jsx';
import PlantModal from './PlantModal.jsx';

function GardenContainer() {
    const [ plants, setPlants ] = useState(null);
    const [ showModal, setShowModal ] = useState(false);
    const [ selectPlant, setSelectPlant ] = useState({
      nickname: '',
      water: '',
      adoptday: '',
      type: ''
    });

    const openModal  = () => {
      showModal ? setShowModal(false) : setShowModal(true);
    }

    const selectedPlantInfo = (info) => {
      setSelectPlant(info);
    };

    const handleEvent = (info) => {
      selectedPlantInfo(info);
      openModal();
    }

    useEffect(() => {
      fetch('/plant')
      .then((data) => data.json())
      .then((plantData) => {
        console.log('Your plants made it to the frontend!', plantData[0].plantName);
        setPlants(plantData);
      })
      .catch(err => console.log("Error on frontend fetching", err))
    }, []);


      const displayPlants = plants && plants.map((plant, i) => {
        return (
          <>
             <PlantCard 
            key={ `${i}PlantCard` }
            nickName={ plant.nickName} 
            plantName={ plant.plantName } 
            water={ plant.water } 
            birthday={ plant.birthday } 
            handleEvent={ handleEvent }
            // setShowModal={ openModal }
            // selectPlant={ selectedPlantInfo }
           />
           { showModal ? <PlantModal setShowModal={ openModal } plantInfo={ selectPlant } /> : null }
          </>
        )
      });
    
    

    return (
        <div className='garden--container'>
            { displayPlants }
        </div>
    )

}

export default GardenContainer;