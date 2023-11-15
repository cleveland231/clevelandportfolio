import React from 'react'
import { NavLink } from 'react-router-dom'
import './TonTechnologies.css';

export const TonTechnologies = () => {
  return (
    <div className='TonTechnologies'>
      <div className="Services">
          <h2> Ton Technologies </h2>
          <h2> Need a website? Let's connect! </h2>
        <div className='ServicesBox'>
          <h2> Freelance Services: </h2>
          <li> Website </li>
          <li> UX/UI Design </li>
          <li> Card Design </li>
          <li> Mobile Design </li>
          <li> Copywriting </li>
          <li> Branding </li>
        </div>
      </div>
    </div>
  )
}
