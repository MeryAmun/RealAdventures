import React, {Component} from 'react' 
import {connect} from 'react-redux'
import {addStory} from '../actions/storyAction'



class AddStory extends Component {
    state ={ 
        story: [ 
        {id: '', title: '', body: ''}
        ]
}
    

    handleChange = (e) => {
        this.setState({
           state: e.target.value
     
        })
       // console.log(this.props.stories)
    
    }
    


handleSubmit = (e) => {
      e.preventDefault();
    //this.props.addStory(this.state.stories)
    //this.setState({stories: [ 
       // {id: '', title: '', body: ''}
   // ] })
   console.log(this.state);
   
};

 render(){
        return (
            
        <div className="container center">
     <form className="card z-depth-0" onSubmit={this.handleSubmit}>
 <label className="card z-depth-0 lighten-5 black-text">
 <input type="text" name="title" placeholder="Title" onChange={this.handleChange} value={this.state.title}/>
</label>
<label className="card  z-depth-0 lighten-5 black-text">
<input type="text" name="message" placeholder="Write Story" onChange={this.handleChange} value={this.state.body}/>
</label>
<div className="card-action red lighten-5 red-text">
<h6>Posted by Real Adventures</h6>
<h6> 14th June 4:30am</h6>
</div>

<input type="submit" value="Add Story" className="tiex" onClick={this.handleClick} />

</form>
</div>
        );
    }
}
 const mapStateToProps = (state) => {

    //let id = ownProps.match.params.story_id
    return {
  story: state.story
   //.filter(story => story.id === id)
    }
    
}

const mapDispatchToProps = (dispatch) => {
   
    return {
       addStory: (story) => {dispatch(addStory(story))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStory)