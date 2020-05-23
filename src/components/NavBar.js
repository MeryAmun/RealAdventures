import React, {Component} from 'react'
//we use <Link> and <NavLink> instead of <a href="">
//withRouter is a HOC
//import {Link, navLink, withRouter} from 'react-router-dom'
//import Nav from './Nav'
import Events from './Events'




class  NavBar extends Component {
  


   //programatic redirects using withRouter HOC 
      //setTimeout(() => {
      //  props.history.push('/')
    //}, 100000);
    
    
render() {
  
return (
         
         <nav className="navbar">

<Events />
</nav>
        )
       }
    }


export default NavBar