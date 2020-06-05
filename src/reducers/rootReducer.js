const initState = {
  
    stories: [
      {id: '1', title: "My visit to Mauritius Island", body:"last summer i visited Mauritius Islands,it was one hell of a summer vacation..."},
      {id:'2', title: "On a Safari in Kenya", body: "I never imagined how beautiful Kenya was and how awesome a safari trip could be.Mombassa is lit!!"},
    {id: '3', title: "The carribbean Islands,wooo!!", body: "Cuba, Jamaica, Bahamas,Trinida...baeutiful beautiful places"}
    ]
         }
    
    
    const rootReducer = (state = initState, action) => {
     //if (action.type === 'DELETE_STORY') {
      
       //return {
       // ...state,
       // stories: stories
     // } 
    //}
     
    return state;
    }
    
    export default rootReducer