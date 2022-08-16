import { configureStore } from '@reduxjs/toolkit'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

let store = configureStore ({
    reducer: {
        profileReducer,
        dialogsReducer,
        sidebarReducer,
    }
})

export default store