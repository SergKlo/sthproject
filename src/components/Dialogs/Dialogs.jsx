import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { useDispatch, useSelector } from "react-redux";


const Dialogs = () => {

    //let state = props.store.getState().messagesPage

    let state = useSelector(state => state.dialogsReducer);
    let dispatch = useDispatch();

    let dialogsElements = state.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id}/> )
    let messagesElements = state.messages.map( m => <Message key={m.id} message={m.message} /> )
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        //props.store.dispatch(sendMessageCreator())
        dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        //props.store.dispatch(updateNewMessageBodyCreator(body))
        dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea   value={newMessageBody}
                                    onChange={onNewMessageChange}
                                    placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs