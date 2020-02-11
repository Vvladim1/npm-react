import React from "react";
import {updateNewMessageTextCreator, sendMessageCreator} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
  debugger;
  let dialogs = props.store.getState().dialogsReducer.dialogs;
  let messages = props.store.getState().dialogsReducer.messages;
  let newMessageBody = props.store.getState().dialogsReducer.newMessageBody;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (body) => {
    props.dispatch(updateNewMessageTextCreator(body));
  }

  return <Dialogs sendMessage={onSendMessageClick}
                  onNewMessageBody={onNewMessageChange} 
                  dialogs={dialogs} 
                  messages={messages} 
                  newMessageBody={newMessageBody} />
};

export default DialogsContainer;
