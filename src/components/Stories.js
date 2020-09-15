import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import AddStory from './addStory'


const Stories = ({stories}) => {
 // console.log(this.props)
 //const {stories} = this.props;

const storyList = stories.length  ?   (stories.map(story => {
    return (
        
 <div className="container center" key={story.id}>
<div className="card z-depth-0">
 <div className="card-content">
 <Link to = {'/' + story.id}>
              
<h6 className="black-text lighten-3">
{story.title}</h6>
</Link>
<p> {story.body} </p>

<div className="card-action red lighten-5 red-text">
<h6>Posted by Real Adventures</h6>
<h6> 14th June 4:30am</h6>
</div>
</div>


</div>
</div> 
 
    )
})
) : (
    <div className="story2">No Stories yet? Hurry up!!</div>
)


return (
    <div>
<div className="container2">
<h2 className="tix"> Loading On The Road Stories... (:
  
{storyList}
<AddStory/>

</h2>
</div>

<footer className="foot">
    <h4> Reel Adventures 2020&copy;</h4></footer>
    </div>     
      

)
}



 
const mapStateToProps = (state) => {
    //let id = ownProps.match.params.story_id
   return {
    stories: state.stories
    //.filter(story => story.id === id)
}
    }
        

  

export default connect(mapStateToProps)(Stories)