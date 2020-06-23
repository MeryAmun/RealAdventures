import React, {Component} from 'react'
//we use <Link> and <NavLink> instead of <a href="">
//withRouter is a HOC
//import {Link, navLink, withRouter} from 'react-router-dom'
//import Nav from './Nav'
import Events from './Events'




const NavBar = () => {
  


   //programatic redirects using withRouter HOC 
      //setTimeout(() => {
      //  props.history.push('/')
    //}, 100000);
    return (
   <nav className="navbar">

<Events />
</nav>
        )
       }
   


export default NavBar