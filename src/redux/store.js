import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hey, what`s up?', likesCount: 33},
                {id: 2, message: 'It`s my first crap', likesCount: 4},
                ],
            newPostText: 'something else'
        },

        messagesPage:{
            messages: [
                {id: 1, message: 'Hey!'},
                {id: 2, message: 'Where r u?'},
                {id: 3, message: 'Alright, I`ll come soon'},
                {id: 4, message: 'Hey!'},
                {id: 5, message: 'Hey!'},
                {id: 6, message: 'Hey!'},
              ],
            dialogs: [
                {id: 1, name: 'Serg'},
                {id: 2, name: 'Ann'},
                {id: 3, name: 'Nansy'},
                {id: 4, name: 'Alex'},
                {id: 5, name: 'Jacob'},
                {id: 6, name: 'Oliver'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}


export default store