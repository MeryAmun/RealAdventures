

export const storyReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_STORY':
            let id = Math.random() * 10
            return [...state, {
                title: action.story.title,
                body: action.story.body,
                id: id
            }]
            case 'REMOVE_STORY':
                return state.filter(story => story.id !== action.id)
                default:
                    return state
    }
}