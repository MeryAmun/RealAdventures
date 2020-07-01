const initState = {
  
    stories: [
      {id: '1', title: "My visit to Mauritius Island", body:"last summer i visited Mauritius Islands,it was one hell of a summer vacation...We visited many beautiful places"} 
    ]
         }
    
    
    const rootReducer = (state = initState, action) => {
    //if (action.type === 'DELETE_STORY') {
      //let newStories = state.stories.filter(story => {
        //return action.id !== story.id
     //// })
switch(action.type) {
  default:
    return state
  case 'DELETE_STORY':
    let newStories = state.stories.filter(story => {
      return action.id !== story.id
    })
    console.log('story deleted')
    return {
      ...state,
      stories: newStories
    };

    case 'ADD_STORY':
      return {
        ...state,
        stories: [...state.stories, action.payload],

      }
      
    }

    }
    
    export default rootReducer