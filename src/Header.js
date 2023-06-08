import React from 'react';
import{NavLink} from 'react-router-dom';
import './Main.css';
function Header(){
    return(<>
    <div className='bar'>
    
        <ul>
          <NavLink to="/" >
        <li>Home</li></NavLink>
        <NavLink to="/about">
        <li>About Us</li></NavLink>
        <NavLink to="/events" >
        <li>Events</li></NavLink>
        <NavLink to="/contact" >
        <li>Contact Us</li></NavLink></ul></div></>);
}
export default Header;