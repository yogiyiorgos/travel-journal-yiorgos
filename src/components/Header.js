import React from 'react';
import globeIcon from '../images/globe-icon.png';

function Header() {
  return (
    <div className='header-container'>
      <img className='header--icon' src={globeIcon} alt='Globe' />
      <h1 className='header--h1'>my travel journal.</h1>
    </div>
  );
}

export default Header;
