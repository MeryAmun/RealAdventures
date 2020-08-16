import React, { useContext } from 'react';
import {StoryContext } from '../contexts/StoryContext';
import {ThemeContext} from '../contexts/ThemeContext';


const StoryDetails = ({story}) => {
    const {removeStory} = useContext(StoryContext)
    const {isLightTheme, light, dark} = useContext(ThemeContext);
 const theme = isLightTheme ? light : dark;
 
    const storydetails = this.story ? ( 
        
       <div className="container center" key={story.id} style={{background:theme.bg, text:theme.text, ui: theme.ui}}>
         <div className="card-content">
        
        <h6 className="title white-text lighten-3">
        {story.title}</h6>
     
        <p> {story.body} </p>
        <h6  className="card-action red-text">Posted by Real Adventures</h6>
        <h6> 14th June 4:30am</h6>

        <button calssName='tiex' onClick={ () => removeStory(story.id)}>Remove Story</button>
        </div>
    
        
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <footer className="foot">
        <h4> Reel Adventures 2020&copy;</h4></footer>  
        </div>
        
           

) :(
    null
)
return (
    <div>
             <div className="container3" style={{background:theme.bg, text:theme.text, ui: theme.ui}}>
            
             {storydetails}
     
             <div>
             
         </div>
 </div> 

</div>
)
}
export default StoryDetails;
