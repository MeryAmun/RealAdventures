import React, {Component} from 'react'
import {connect} from 'react-redux'



class Details extends Component {

    render() {
        console.log(this.props)
        const story = this.props.story ? (
        <div className="details red text lighten-4">
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
            <div className="container">
                {story.body}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
   let id = ownProps.match.params.details;
    return {
   story: state.stories.find(story => story.id === id)
    }
}
export default connect(mapStateToProps)(Details)