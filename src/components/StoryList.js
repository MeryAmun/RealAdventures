import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from '../contexts/ThemeContext';
import NewStoryForm from './NewStoryForm'
//import uuid from 'uuid/v1'

const StoryList = () => {
     const {isLightTheme, light, dark} = useContext(ThemeContext);
 const theme = isLightTheme ? light : dark;
    const [stories, setStories] = useState([
        {id: '1', title: "My visit to Mauritius Island", body:"last summer i visited Mauritius Islands,it was one hell of a summer vacation...We visited many beautiful places"} 
    ]);

const addStory = (title, body) => {
    let id = Math.random() * 10
    setStories([...stories, { id,  title, body}
]);
}

return (  
        <div className='story' style={{background:theme.bg, text:theme.text, ui: theme.ui}}>
{stories.map(story => {
    return (
    <div className="container center" key={story.id}>
 <div className="card-content">
 <Link to = {'/' + story.id}>
<h6 className="title white-text lighten-3">
{story.title}</h6>
</Link>
<p> {story.body} </p>
<h6  className="card-action red-text">Posted by Real Adventures</h6>
<h6> 14th June 4:30am</h6>
</div>

</div> 
    )
} )}
<NewStoryForm addStory={addStory} />
<br/>
<br/>
<br/>
<br/>

<footer className="foot">
<h4> Reel Adventures 2020&copy;</h4></footer>  


        </div>
    
    );
}
 
export default StoryList
