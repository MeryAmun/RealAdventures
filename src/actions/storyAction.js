export const deleteStory = (id) => {
    return {
        type: 'DELETE_STORY',
        id: id
    }
};

export const addStory = (story) => {
    story.id = Math.random();
    return {
        type: 'ADD_STORY',
      payload : story
    
    }
};
