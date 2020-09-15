import React from 'react';
//import './DrawerToggleButton.css';
import Loader from  '../loader/loader'

const NavButton = props => {
    return (
        <div>
    <button className="navbtn" onClick={props.click}>
    <div className="navbtn-line"/>
    <div className="navbtn-line"/>
    <div className="navbtn-line"/>
    </button>
  <Loader/></div>
)
    };
export default NavButton;