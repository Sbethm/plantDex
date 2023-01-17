import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dashboard from './Dashboard.jsx';

export default function Header(props) {

  return (
    <header>
        <div className='header--container'>
            <FontAwesomeIcon className='light' icon="seedling" />
            <div className='title'>plantDex</div>
        </div>
        <Dashboard setPlants={ props.setPlants } plants={ props.plants } />
    </header>
  )
}