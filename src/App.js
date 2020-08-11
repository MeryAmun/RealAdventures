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
import Story from './components/Story';
import Loader from  './loader/loader'
import ThemeContextProvider from './contexts/ThemeContext';



class App extends Component {

  //static contextType = ThemeContext;

  render() {
   // console.log(this.context)
   // const {isLightTheme, light, dark} = this.context;
   //  const theme = isLightTheme ? light : dark 
    return (
    
      <BrowserRouter>
      <ThemeContextProvider>
      
      <div className="App">
      <Events />  
     <Loader />
       <Icons />
       
       <Switch>
      <Route  exact path='/' component={Home} />
      <Route path='/about' component={About} />
  <Route path='/blog' component={Destinations} />
  <Route path='/contact' component={Contact} />
  <Route  path='/Stories' component={Stories} />
  <Route  path='/:story_id/' component={Story} />
  <Route  path='/StoryList/' component={Stories} />
     </Switch>
    </div>
    </ThemeContextProvider>   

      </BrowserRouter>
    );
  }

  
}

  


export default App;
