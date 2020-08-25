import React, { useContext } from 'react';
import {StoryContext } from '../contexts/StoryContext';
import {ThemeContext} from '../contexts/ThemeContext';


const StoryDetails = ({story}) => {
    const {removeStory} = useContext(StoryContext)
    const {isLightTheme, light, dark} = useContext(ThemeContext);
 const theme = isLightTheme ? light : dark;
 
   return(
       <div>
       <div className='details' style={{background:theme.bg, text:theme.text, ui: theme.ui}} >
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
           <p>This is why am hot</p>
       </div>
       </div>
   )
}
export default StoryDetails;
