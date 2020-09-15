import React, { Component } from 'react'

 class StoryDetails extends Component {
     state = {
         id: null
     }
componentDidMount(){
    console.log(this.props)
    let id = this.props.match.params.storydetails_id;
    this.setState({
        id: id
    })
}


    render() {
        return (
            <div>
                <p>{this.state.id}</p>
                <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
            </div>
        )
    }
}
export default StoryDetails