import React, { useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext';


const Blog = () =>{
 const {isLightTheme, light, dark} = useContext(ThemeContext);
 const theme = isLightTheme ? light : dark;
    return (
        <div style={{background:theme.bg}}>
        <div className="destination"> 
        <a href="https://officetourismemali.net">
        <div className="mali"/>
        </a> 
        <a href="https://malawitourism.com" target="_blank" rel="noopener noreferrer" >
        <div className="malawi"/>
        </a>
          <div className="cmr"/>
          <a href="https://botswanatourism.co.bw" target="_blank" rel="noopener noreferrer" >
          <div className="botswana"/>
          </a>
     <a href="https://magicalkenya.com" target="_blank"  rel="noopener noreferrer">
<div className="kenya"/>
</a>
        

        </div>
        </div>
    )


}
  

             
            
       




export default Blog