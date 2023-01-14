import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  return (
    <header>
        <div className='header--container'>
            <FontAwesomeIcon className='light' icon="seedling" />
            <div className='title'>plantDex</div>
        </div>
    </header>
  )
}