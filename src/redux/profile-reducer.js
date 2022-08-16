const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
        posts: [
            {id: 1, message: 'Hey, what`s up?', likesCount: 33},
            {id: 2, message: 'It`s my first crap', likesCount: 4},
            ],
        newPostText: 'something else'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: Date.now(),
                message: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer