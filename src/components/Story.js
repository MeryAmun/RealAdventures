import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteStory} from '../actions/storyAction'



class Story extends Component {


    handleClick = () => {
        this.props.deleteStory(this.props.story.id);
        this.props.history.push('/stories');
          }
    

    render() {
        //console.log(this.props)
        const story = this.props.story ? (
        <div className="container center">
        <div className="card z-depth-0 ">
    <h4 className="card-action red lighten-5 red-text ">{this.props.story.title}</h4>
    <p className="">{this.props.story.body}</p>
    <h4 className="card-action red lighten-5 red-text">
    <h6>Posted by Real Adventures</h6>
<h6> 14th June 4:30am</h6>
</h4>

<button className="tiex" onClick={this.handleClick}>
     Delete Story
        </button>
            </div>
            </div>
        ) : (
            <div className="story2 center">Loading Stories...</div>
        )
        return (
   <div>
            <div className="container3">
            
            {story}
            <div>
            
        </div>
</div> 
 <footer className="foot"><h4> Reel Adventures 2020&copy;</h4></footer>
     </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
   let id = ownProps.match.params.story_id
    return {
   story: state.stories.find(story => story.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
       deleteStory: (id) => { dispatch(deleteStory(id)) }
    }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Story)