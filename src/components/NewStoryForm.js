import React, { useState, useContext } from 'react';
import { StoryContext } from '../contexts/StoryContext';
//import {ThemeContext } from '../contexts/ThemeContext';


const NewStoryForm = () => {
    const { dispatch } = useContext(StoryContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const handleSubmit = (e => {
        e.preventDefault();
        dispatch({ type: 'ADD_STORY', story: { title, body } });
        setTitle('');
        setBody('');
        //console.log(title);
        //console.log(body);
    })
    return (

        <form className="container center new-form" onSubmit={handleSubmit}>

            <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <br />
            <br />
            <textarea cols='100' rows='100' value={body} placeholder="Write Story" onChange={(e) => setBody(e.target.value)} />
            <br />
            <br />
            <h6 className="card-action red-text">Posted by Real Adventures</h6>
            <h6> 14th June 4:30am</h6>
            <input type="submit" value="Spill It :)" className="tiex" />
            <br />
        </form>

    );
}

export default NewStoryForm;