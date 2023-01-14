import React from 'react';
import Header from './Header.jsx';
import GardenContainer from './GardenContainer.jsx';

function MainPage() {
  return (
    <div className='mainpage--container'>
      <Header />
      {/* DashboardContainer */}
      <GardenContainer />
    </div>
    
  )
}

export default MainPage;