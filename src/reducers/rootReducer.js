const initState = {
  
    stories: [
      {id:'2', title: "On a Safari in Kenya", body: "I never imagined how beautiful Kenya was and how awesome a safari trip could be.Mombassa is lit!!"},
    {id: '3', title: "The carribbean Islands,wooo!!", body: "Cuba, Jamaica, Bahamas,Trinida...baeutiful beautiful places"}
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
    }
    case 'ADD_STORY':
      return {
        ...state,
        stories: [...state.stories, action.payload],
      }
      
    }

    }
    
    export default rootReducer