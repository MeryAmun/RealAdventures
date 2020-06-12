import React, {Component} from 'react'
import {connect} from 'react-redux'



class Story extends Component {

    render() {
        console.log(this.props)
        const story = this.props.story ? (
        <div className="Story red text lighten-4">
        <h4 className="center">{this.props.story.title}</h4>
    <p>{this.props.story.body}</p>
    <div className="card-action red lighten-5 red-text">
<p>Posted by Real Adventures</p>
<p > 22/05 12:30am</p>
</div>
            </div>
        ) : (
            <div className="center">Loading Stories</div>
        )
        return (
            <div className="box">
               <p>{story}</p> 
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