import React, { useState } from 'react';
import {Link} from 'react-router-dom';
//import uuid from 'uuid/v2'

const StoryList = () => {
   const [stories, setStories ] = useState([
        {id: '1', title: "My visit to Mauritius Island", body:"last summer i visited Mauritius Islands,it was one hell of a summer vacation...We visited many beautiful places"} 
    ])
    //const addStory = () => {
       // setStories([...stories, {title: '', id: '2'}
   // ]);
   // }
   return (

    <div className='stolist'>
  <ul>
      {stories.map(story => {
          return (
              <li key={story.id}>
              <Link to = {'/' + story.id}>
                                     
                                     <h6 className="black-text lighten-3">
                                     {story.title}</h6>
                                     </Link>
                                     <p> {story.body} </p>
              </li>
          )
      })}
  </ul>

    </div>
   )
   
                   
   }                   
   
                       
 
export default StoryList;