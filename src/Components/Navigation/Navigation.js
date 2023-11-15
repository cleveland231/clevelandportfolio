import './Navigation.css';
import { Routes, Route, NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className='Navigation'>
      <div className="NameContainer">
        <div className="RandomCircle">CT</div>
        <NavLink className="NavigationText" to="/"> <h1> Cleveland Ticoalu </h1> </NavLink>
        <div className="SoftwareEngineerText"> Software Engineer </div>

        <div class="dropdown">
           <button>Food</button>
           <div class="content">
               <a href="">Apple</a>
               <a href="">Orange</a>
               <a href="">Banana</a>
           </div>
        </div>
        
      </div>
      <div className='NavigationBar'>
        <NavLink className="NavigationText" to="/blog"> <p> Blog </p> </NavLink>
        <NavLink className="NavigationText" to="/tontechnologies"> <p> Ton Technologies </p> </NavLink>
        <NavLink className="NavigationText" to="/projects"> <p> Projects </p>  </NavLink>
        <NavLink className="NavigationText" to="/media"> <p> Media </p> </NavLink>
        <NavLink className="NavigationText" to="/connect"> <p> Connect </p> </NavLink>
      </div>



    </div>
  )
}
