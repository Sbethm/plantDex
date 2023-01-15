import React, { useState } from 'react';
import UpdateForm from './UpdateForm.jsx';
import PlantDetails from './PlantDetails.jsx'; 



export default function PlantModal(props) {
    const [ updateForm, setUpdateForm ] = useState(false);

    const { plantInfo } = props;
    console.log(plantInfo)

    return (
        <div className='spot'>
            <button onClick={ props.setShowModal }>X</button>
            { updateForm ? <UpdateForm plantInfo={ plantInfo } /> : <PlantDetails plantInfo={ plantInfo } />}
        </div>
    )
}