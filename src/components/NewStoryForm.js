import React, { useState } from 'react';

const NewStoryForm = ({addStory}) => {
    const [title, setTitle] = useState('');
    const [body, setBody]  = useState('');
    const handleSubmit = (e => {
        e.preventDefault();
        addStory(title, body);
        setTitle('');
        setBody('');
       //console.log(title);
        //console.log(body);
    }) 
    return ( 
       <form className="container center" onSubmit={handleSubmit}>
<input type="text" value={title} placeholder="Title"  onChange={(e) => setTitle(e.target.value)} />
<input type="text" value={body}  placeholder="Write Story"  onChange={(e) => setBody(e.target.value)}/>
<h6  className="card-action red-text">Posted by Real Adventures</h6>
<h6> 14th June 4:30am</h6>
<input type="submit" value="Spill It :)" className="tiex"/>
</form>
);
}
 
export default NewStoryForm;