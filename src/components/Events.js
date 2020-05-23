import React, {Component} from 'react'
import Drawer from './Drawer'
import Nav from './Nav'


class Events extends Component {
    state = {
        drawerOpen: false
      };

      drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return {drawerOpen: !prevState.drawerOpen};
        });
      
      };
      
    
      
  
render(){
    let drawer;

    if (this.state.drawerOpen) {
     drawer = <Drawer/>;
     
    }
   return (
        <div style={{height: '100%'}}>
          <Nav drawerClickHandler={this.drawerToggleClickHandler} />
          {drawer}
        </div>
      );
    }
   
  }

  export default Events