import React, {Component} from 'react'
import {connect} from 'react-redux'



class Story extends Component {

    render() {
        //console.log(this.props)
        const story = this.props.story ? (
        <div className="container center">
        <div className="card z-depth-0 ">
    <h4 className="card-action red lighten-5 red-text ">{this.props.story.title}</h4>
    <p className="">{this.props.story.body}</p>
    <h4 className="card-action red lighten-5 red-text">
<p>Posted by Real Adventures</p>
<p > 22/05 12:30am</p>
</h4>
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
export default connect(mapStateToProps)(Story)