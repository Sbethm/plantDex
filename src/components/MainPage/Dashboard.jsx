import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewPlant from './NewPlantModal.jsx';

export default function Dashboard(props) {
    const [showModal, setShowModal ] = useState(false);

    const openModal  = () => {
      showModal ? setShowModal(false) : setShowModal(true);
    }

    return (
        <div className="dashboard--container">
            <button className='primary--btn' onClick={ setShowModal }>New Plant</button>
            <button className='filter-btn primary--btn'>
                <FontAwesomeIcon className='plantCard--image' icon="sort" />
                Filter
            </button>
            { showModal ? <NewPlant setShowModal={ openModal } setPlants={ props.setPlants } plants={ props.plants } /> : null }
        </div>
    )
}
