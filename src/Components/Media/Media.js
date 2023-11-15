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
        <div className="PhotoBox">
          <img className='MediaPic' src={ LongsPeak } alt="Longs Peak" />
            <p>Longs peak 2022</p>
        </div>
        <div className="PhotoBox">
          <img className='MediaPic' src={ StMartin } alt="Thurgood by da beach" />
            <p>St Marteen 2022</p>
        </div>
        <div className="PhotoBox">
          <img className='MediaPic' src={ Utah } alt="Utah" />
            <p>Utah 2020</p>
        </div>
      </div>

    </div>
  )
}
