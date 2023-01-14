import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dashboard() {
    return (
        <div className="dashboard--container">
            <button className='addPlant--btn'>New Plant</button>
            <button className='filter-btn'>
                <FontAwesomeIcon className='plantCard--image' icon="sort" />
                Filter
            </button>
            
        </div>
    )
}
