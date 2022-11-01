import React, { Component } from 'react';
import GardenContainer from './gardenContainer.jsx';

class MainContainer extends Component {
    
    render() {
        return (
          <div className='main-container'>
            <GardenContainer />
          </div>
        )
    }
}

export default MainContainer;