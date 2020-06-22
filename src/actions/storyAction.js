export const deleteStory = (id) => {
    return {
        type: 'DELETE_STORY',
        id: id
    }
};

export const addStory = (stories) => {
    return {
        type: 'ADD_STORY',
       stories : {
            id: '', title: '', body: ''}
    
    }
};
