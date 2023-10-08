import React from 'react'
import { NavLink } from 'react-router-dom'
import './TonTechnologies.css';

export const TonTechnologies = () => {
  return (
    <div className='TonTechnologies'>
      <div className="Services">
      <h1> Ton Technologies </h1>
        <h2> Freelance Services: </h2>
        <li> Website </li>
        <li> UX/UI Design </li>
        <li> Card Design </li>
        <li> Mobile Design </li>
        <li> Copywriting </li>
        <li> Branding </li>
      </div>
      <h2> Contact for services</h2>
      <button> Service Form </button>
    </div>
  )
}
