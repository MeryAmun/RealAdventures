import React from 'react'
//import {ThemeContext} from '../contexts/ThemeContext';
import NavButton from './NavButton'



const Nav = (props) => {
 //const {isLightTheme, light, dark} = useContext(ThemeContext);
 //const theme = isLightTheme ? light : dark;

    return (
         
        <nav className="navbar">

<div className="spacer">
<h1 className="hes">Reel -ventures</h1>
</div>

<div className="navebtn">
<NavButton click=
{props.drawerClickHandler}/>
</div>
</nav>
       )
      }
   
export default Nav