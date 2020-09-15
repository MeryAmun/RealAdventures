import React, { useContext } from 'react';
import '../css/storylist.css'
import { Link } from 'react-router-dom';
import { StoryContext } from '../contexts/StoryContext';
import { ThemeContext } from '../contexts/ThemeContext';
//import StoryDetails from './StoryDetails'
import NewStoryForm from './NewStoryForm'


const StoryList = () => {
    const { stories, dispatch } = useContext(StoryContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    //style={{background:theme.bg, text:theme.text, ui: theme.ui}}
    return stories.length ? (

        <div className='story' style={{ background: theme.bg, text: theme.text, ui: theme.ui }}>
            {stories.map(story => {
                return (
                    <div className="container center" key={story.id}>
                        <div className="card-content" onClick={() => dispatch({ type: 'REMOVE_STORY', id: story.id })}>

                            <Link to={'/' + story.id}>      <h6 className="title white-text lighten-3" style={{ text: theme.text, ui: theme.ui }}>
                                {story.title}</h6>
                            </Link>

                            <p> {story.body} </p>
                            <h6 className="card-action red-text">Posted by Real Adventures</h6>
                            <h6> 14th June 4:30am</h6>
                        </div>
                        <br />
                    </div>
                )
            })}

            <br />
            <br />
            <br />
            <NewStoryForm />

            <footer className="foot">
            <h4> Reel Adventures 2020&copy;</h4></footer>
        </div>

    ) : (
            <div className="story2" style={{ background: theme.bg, text: theme.text, ui: theme.ui }}>
                <h2 className="tix"> No Stories yet? Hurry up!!!!</h2>
                <NewStoryForm />
                
          <footer className="foot">
            <h4> Reel Adventures 2020&copy;</h4></footer>
            </div>
        );



}
export default StoryList;