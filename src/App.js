import React, {Component} from 'react';
import './App.css'
import Icons from './components/Icons'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/home';
import About from './components/about';
import Destinations from './components/blog';
import Contact from './components/contact'
import Events from './components/Events'
import Stories from './components/Stories';



class App extends Component {

  render() {
    
    return (
    
      <BrowserRouter>
      <div className="App">
      <Events />
     
       <Icons />
       <Switch>
      <Route  exact path='/' component={Home} />
      <Route path='/about' component={About} />
  <Route path='/blog' component={Destinations} />
  <Route path='/contact' component={Contact} />
  <Route  path='/:stories/details' component={Stories} />
 
     </Switch>
     
</div>

      </BrowserRouter>
    );
  }

  
}

  


export default App;
