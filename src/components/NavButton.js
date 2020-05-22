import React from 'react';
//import './DrawerToggleButton.css';

const NavButton = props => (
    <button className="navbtn" onClick={props.click}>
    <div className="navbtn-line"/>
    <div className="navbtn-line"/>
    <div className="navbtn-line"/>
    </button>
);
export default NavButton;