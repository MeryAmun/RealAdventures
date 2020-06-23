import React, {Component} from 'react' 
import {connect} from 'react-redux'
import {addStory} from '../actions/storyAction'



class AddStory extends Component {
   state =  {
       title: '',
       body: ''
   }

    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value
     
        })
       // console.log(this.props.stories)
    
    }
    
handleSubmit = (e) => {
      e.preventDefault();
    this.props.addStory(this.state);
    //console.log(this.state)
    this.setState({value: ''});
   
};

   

   

 render(){

        return (
           
        <div className="container center">
     <form className="card z-depth-0" id='id' onSubmit={this.handleSubmit}>
 <label className="card z-depth-0 lighten-5 black-text">
 <input type="text" id="title" name="title" placeholder="Title" onChange={this.handleChange}/>
</label>
<label className="card  z-depth-0 lighten-5 black-text">
<input type="text" id="body" name="body" placeholder="Write Story" onChange={this.handleChange}/>
</label>
<div className="card-action red lighten-5 red-text">
<h6>Posted by Real Adventures</h6>
<h6> 14th June 4:30am</h6>
</div>

<input type="submit" value="Add Story" className="tiex"/>

</form>
</div>
        );
    }
}
 //const mapStateToProps = (state) => {

    //let id = ownProps.match.params.story_id
   // return {
  //story: state.story
   //.filter(story => story.id === id)
   // }
    
//}

const mapDispatchToProps = (dispatch) => {
   
    return {
        
       addStory: (story) => {dispatch(addStory(story))}
    }
}

export default connect( null, mapDispatchToProps)(AddStory)