import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom'

class Stories extends Component {


    handleClick = () => {
   // this.props.deleteStory()
   this.props.history.push('/');  
      }

 render() {
    //console.log(this.props)
//const {stories}  = this.props;
//const storyList  = stories.length ? 

const {stories} = this.props;

const storyList = stories.length  ?   (stories.map(story => {
    return (
        
 <div className="container center" key={story.id}>

<div className="card z-depth-0">
 <div className="card-content">
 <Link to={'/' + story.id}>
              
<h6 className="black-text lighten-3">
{story.title}</h6>
</Link>
<p> {story.body} </p>
<div className="card-action red lighten-5 red-text">
<p>Posted by Real Adventures</p>
<p > 22nd May 12:30am</p>
</div>
</div>

<button className="tiex" onClick={this.handleClick}>
     Delete Story
        </button>
</div>
</div> 
 
    )
})
) : (
    <div className="center">No Stories yet? Hurry up!!</div>
)


return (
    <div>
<div className="container2">
<h2 className="tix"> Loading On The Road Stories... (:
  
{storyList}
</h2>
</div>

<footer className="foot">
    <h4> Reel Adventures 2020&copy;</h4></footer>
    </div>     
      

)
}
}


 
const mapStateToProps = (state) => {
   return {
     stories: state.stories
}
    }
        

   


//const mapDispatchToProps = (dispatch) => {
    
/////return {
  // deletestory: (story) => {dispatch(deletestory(story))}
// }
//}

export default connect(mapStateToProps)(Stories)