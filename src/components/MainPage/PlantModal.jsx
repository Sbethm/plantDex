import React, { useState } from 'react';
import UpdateForm from './UpdateForm.jsx';
import PlantDetails from './PlantDetails.jsx'; 



export default function PlantModal(props) {
    const [ updateForm, setUpdateForm ] = useState(false);

    const { plantInfo } = props;
    
    const updateModal = () => {
        console.log(updateForm)
        updateForm ? setUpdateForm(false) : setUpdateForm(true);
    }

    return (
        <div className='plant--modal'>
            <button className='primary--btn closeModal--btn' onClick={ props.setShowModal }>X</button>
            { updateForm ? <UpdateForm plantInfo={ plantInfo } /> : <PlantDetails plantInfo={ plantInfo } update={ updateModal } />}
        </div>
    )
}