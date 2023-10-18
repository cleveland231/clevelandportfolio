import React from 'react'
import { NavLink } from 'react-router-dom'
import './Projects.css';

export const Projects = () => {
  return (
    <div className='Projects'>
    <h2> Projects </h2>
      <div className="ProjectBoxHolder">

        <div className="ProjectBox">
          <div className="ProjectName">
            <h3> Colorado Loving Care LLC </h3>
            <h4> www.coloradoloving.care </h4>
            <h4> September 2023 - Present </h4>
          </div>
          <div className="ProjectDescriptionBox">
            <h4>
              Freelance Work
            </h4>
            <div className="ProjectDescription">
              I designed and developed the website for Colorado Loving Care.
              Employing optimal UI/UX principles to ensure that it serves as the
              primary destination for individuals seeking information about the
              company.
            </div>
            <p> Languages: React, JSX </p>
            <p> Technologies: ReactRouter, Cypress </p>
          </div>
        </div>

        <div className="ProjectBox">
          <div className="ProjectName">
            <h3> Personal Website </h3>
            <h4> www.clevelandticoalu.com </h4>
            <h4> January 2023 - Present </h4>
          </div>
          <div className="ProjectDescriptionBox">
            <h4>
              Personal Project
            </h4>
            <div className="ProjectDescription">
              This website is my blog, portfolio, connecter for the world.
            </div>
            <p> Languages: React, JSX, ReactRouter </p>
            <p> Technologies: ReactRouter, Cypress </p>
          </div>
        </div>

        <div className="ProjectBox">
          <div className="ProjectName">
            <h3> HeatCheck </h3>
            <h4> Heatcheck </h4>
            <h4> October 2022 </h4>
          </div>
          <div className="ProjectDescriptionBox">
            <h4>
              Group Project
            </h4>
            <div className="ProjectDescription">
              Explore spicy restaurants by location and add review, ratings, or
              dishes to our menu. This app is currently not deployed.
            </div>
            <p> Languages: React, JSX </p>
            <p> Technologies: ReactRouter, Cypress </p>
          </div>
        </div>

        <div className="ProjectBox">
          <div className="ProjectName">
            <h3> NunSlinger </h3>
            <h4> NunSlinger </h4>
            <h4> September 2022 </h4>
          </div>
          <div className="ProjectDescriptionBox">
            <h4>
              Group Project
            </h4>
            <div className="ProjectDescription">
              Reaction based multi-level shooting game. Play as Sister Beretta to
              save characters from possession. This app is currently not deployed.
            </div>
            <p> Languages: React, JSX, TypeScript </p>
            <p> Technologies: ReactRouter, Cypress </p>
          </div>
        </div>

      </div>
    </div>
  )
}
