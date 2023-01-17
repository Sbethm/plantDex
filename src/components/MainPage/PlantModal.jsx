import React, { useState } from 'react';
import UpdateForm from './UpdateForm.jsx';
import PlantDetails from './PlantDetails.jsx'; 



export default function PlantModal(props) {
    const setPlants = props.setPlants;
    const plants = props.plants;
    const closeModal = props.setShowModal;
    const [ updateForm, setUpdateForm ] = useState(false);

    const { plantInfo } = props;
    
    const updateModal = () => {
        console.log(updateForm)
        updateForm ? setUpdateForm(false) : setUpdateForm(true);
    }

    return (
        <div className='plant--modal'>
            <button className='primary--btn closeModal--btn' onClick={ closeModal }>X</button>
            { updateForm ? <UpdateForm 
                plantInfo={ plantInfo }
                update={ updateModal } 
                setPlants={ setPlants }
                plants={ plants } 
            /> : <PlantDetails 
                plantInfo={ plantInfo } 
                update={ updateModal } 
                setPlants={ setPlants }
                plants={ plants } 
                closeModal={ closeModal }
            />}
        </div>
    )
}