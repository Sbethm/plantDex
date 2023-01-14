import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dashboard from './Dashboard.jsx';

export default function Header() {

  return (
    <header>
        <div className='header--container'>
            <FontAwesomeIcon className='light' icon="seedling" />
            <div className='title'>plantDex</div>
        </div>
        <Dashboard />
    </header>
  )
}