import React from 'react';
import {Link} from 'react-router-dom'



const Drawer = props => {
   let drawerClasses = 'drawer';
   if (props.show) {
     
       drawerClasses = 'drawer open';
   }
   
   return (
<nav className="nave" onClick={props.click}>
<ul className="right">
  <li><Link to ="/" className="nave_single_link">Home</Link></li> 
  <li><Link to ="about" className="nave_single_link" >About</Link></li> 
<li><Link to ="/blog" className="nave_single_link" >Destinations</Link></li>
<li><Link to ="/stories" className="nave_single_link">Road Gists</Link></li> 
<li><Link to ="/contact" className="nave_single_link">Contact</Link></li> 
</ul>
</nav>
    
);

};
export default Drawer;


