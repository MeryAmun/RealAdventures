import React, {Component} from 'react' 
import {connect} from 'react-redux'
import {addStory} from '../actions/addStory'



class AddStory extends Component {


    render(){
        return (
            
        <div className="container center">
        <form className="card z-depth-0" onClick={this.handleClick} key={addStory.id}>
 <label for="title"  id="title" className="card z-depth-0 lighten-5 black-text">
 <input type="text" />
</label>
<label for="body"  id="body" className="card  z-depth-0 lighten-5 black-text">
<input type="text" />
</label>
<h4 className="card-action red lighten-5 red-text">
<h6>Posted by Real Adventures</h6>
<h6> 14th June 4:30am</h6>
</h4>

<button className="tiex" onClick={this.handleClick}>
     Add Story
        </button>
</form>
</div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addStory: (id) => {dispatch(addStory(id))}
    }
}

export default connect(null, mapDispatchToProps)(AddStory)