const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState,action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id:7, message:body})
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer