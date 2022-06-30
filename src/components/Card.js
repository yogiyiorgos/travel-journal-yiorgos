import React from 'react';
import coordIcon from '../images/coord-icon.png';

function Card(props) {
  return (
    <div className='card-container'>
      <div>
        <img src={props.entry.imageUrl} className='card--img' />
      </div>
      <div className='card--desc'>
        <img src={coordIcon} alt='Point on map' className='coord-icon' />
        <span className='location'>{props.entry.location}</span>{' '}
        <a href={props.entry.googleMapsUrl} target='_blank'>
          View on Google Maps
        </a>
        <h2 className='card--h2'>{props.entry.title}</h2>
        <span className='card--date'>
          {props.entry.startDate} - {props.entry.endDate}
        </span>
        <p className='card--text'>{props.entry.description}</p>
      </div>
    </div>
  );
}

export default Card;
