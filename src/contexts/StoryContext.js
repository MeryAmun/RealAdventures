import React, { createContext, useEffect, useReducer } from 'react'
import { storyReducer } from '../reducers/storyReducer'

export const StoryContext = createContext();

const StoryContextProvider = (props) => {
    const [stories, dispatch] = useReducer(storyReducer, [{ id: '1', title: "My visit to Mauritius Island", body: "last summer i visited Mauritius Islands,it was one hell of a summer vacation...We visited many beautiful places" }], () => {
        const localData = localStorage.getItem('stories');
        return localData ? JSON.parse(localData) : []
    });

    /* useEffect(() => {
          localStorage.setItem('stories', JSON.stringify(stories))
      }, [stories])*/

    useEffect(() => {
        localStorage.setItem('stories', JSON.stringify(stories))
    }, [stories]);

    /*   const addStory = (title, body) => {
      let id = Math.random() * 10
    setStories([...stories, { id,  title, body}
   ]);
   };
   
   const removeStory = (id) => {
       setStories(stories.filter(story => story.id !== id));
      // this.props.history.push('/storylist');
   };*/
    return (
        <StoryContext.Provider value={{ stories, dispatch }}>
            {props.children}
        </StoryContext.Provider>
    );
}

export default StoryContextProvider;
