import React, {Component} from 'react'
import {connect} from 'react-redux'



class Details extends Component {

    render() {
        console.log(this.props)
        const details = this.props.details ? (
        <div className="details red text lighten-4">
        <h4 className="center">{this.props.detail.title}</h4>
    <p>{this.props.detail.body}</p>
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
               <p>{detail}</p> 
            </div> 
        )
    }
}

const mapStateToProps = (state, ownProps) => {
   let id = ownProps.match.params.stories.details
    return {
   details: state.details.find(detail => detail.id === id)
    }
}
export default connect(mapStateToProps)(Details)