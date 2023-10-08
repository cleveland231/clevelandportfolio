import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css';

export const Home = () => {
  return (
    <div className='Home'>


        <img className='ProfilePic' src={'https://github.com/turingschool-examples/whats-cookin-starter-kit/assets/96998327/a8e19c56-2750-40d2-a053-5f86d35721f3'} alt="Greeley" />

        <div className='Subtitle'>
          <h2 className='WelcomeText'> Hello friends! I’m Cleveland </h2>
          <div className='WelcomeText'>
            <p>Front End Software Engineer working in Health Care.
            I currently am a Residential Manager responsible for care and supporting clients
            at Colorado Loving Care (CLC), a Program Approved Service Agency based in Colorado
            specializing in Host Home Providing services, where I started as Human Resources.
            </p>
            <p>
            Prior to CLC, I graduated from Turing School of Software and Design where I gained fundamental
            experience developing apps on agile teams using JavaScript, React.js, Mocha/Chai/Cypress,
            and CSS, and have experience in Typescript, GraphQL, Node.js. This trajectory has been
            immensely rewarding and I look forward to broadening and sharpening my skill set in the
            future. I am also open to freelance work (Ton Technologies).
            </p>
            <p>
            When not working I enjoy training running, pickle ball, climbing,
            weight lifting, or discovering new dining spots with friends and family.
            I maintain a relentless drive to challenge myself, always eager to embrace new opportunities
            that foster both my personal and professional growth.
            </p>
          </div>
        </div>

    </div>
  )
}
