import React from 'react'
import { NavLink } from 'react-router-dom'
import './Media.css';
import LongsPeak from '../../Assets/longspeak.jpeg'
import StMartin from '../../Assets/stmartin.jpeg'
import Utah from '../../Assets/utah.jpeg'

export const Media = () => {
  return (
    <div className='Media'>
      <h2> Media </h2>
      <div className='PhotoBoxHolder'>
        <img className='MediaPic' src={ LongsPeak } alt="Longs Peak" />
        <img className='MediaPic' src={ StMartin } alt="Thurgood by da beach" />
        <img className='MediaPic' src={ Utah } alt="Utah" />
      </div>

    </div>
  )
}
