import React, { Component } from 'react';
import PlantCard from './plantCard.jsx';

class GardenContainer extends Component {

    render() {
        return (
            <div className='garden-container'>
                <PlantCard />
            </div>
        )
    }
}

export default GardenContainer;