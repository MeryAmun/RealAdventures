import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import Loader from  '../loader/loader'


const Drawer = props => {
   let drawerClasses = 'drawer';
   if (props.show) {
     
       drawerClasses = 'drawer open';
   }
  // <li><Link to ="/stories" className="nave_single_link">Stories</Link></li>
   return (
     <div>
<nav className="nave" onClick={props.click}>
<ul className="right">
  <li><Link to ="/" className="nave_single_link">Home</Link></li> 
  <li><Link to ="/about" className="nave_single_link" >About</Link></li> 
<li><Link to ="/blog" className="nave_single_link" >Destinations</Link></li>
 <li><Link to ="/contact" className="nave_single_link">Contact</Link></li> 
<li><Link to ="/storylist" className="nave_single_link">StoryList</Link></li> 
</ul>
</nav>
  <Loader/>  
  </div>
);

};
export default withRouter(Drawer);


