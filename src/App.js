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
import StoryList from './components/StoryList'
import Loader from  './loader/loader'
import ThemeContextProvider from './contexts/ThemeContext';



class App extends Component {

  //static contextType = ThemeContext;

  
  render() {
    //console.log(this.context)
// const {isLightTheme, light, dark} = this.state.context;
     //const theme = isLightTheme ? light : dark 
    return (
    
      <BrowserRouter>
      
     
    <div className="App">
      <Events />  
     <Loader />
     <ThemeContextProvider>
       <Icons />
      
       <Switch>
      <Route  exact path='/' component={Home} />
      <Route path='/about' component={About} />
  <Route path='/blog' component={Destinations} />
  <Route path='/contact' component={Contact} />
  <Route  path='/Stories' component={Stories} />
  <Route  path='/StoryList' component={StoryList} />  
  <Route  path='/:story_id/' component={Story} />
 </Switch>
</ThemeContextProvider>   
    </div>
      </BrowserRouter>
    );
  }

  
}

  


export default App;
