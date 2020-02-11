import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./dialog/dialogItem";
import Message from "./mesage/message";
import {updateNewMessageTextCreator, sendMessageCreator} from '../redux/dialogs-reducer';

const Dialogs = props => {
  debugger;
  let dialogsElement = props.dialogs.map(data => (
    <DialogItem name={data.name} id={data.id} />
  ));
  let messagesElements = props.messages.map(datas => (
    <Message message={datas.message} />
  ));

  let newMessageBody = props.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    
    let body = e.target.value;
    props.onNewMessageBody(body)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElement}</div>
      <div>
      <div className={s.messages_items}>{messagesElements}</div>
      <div>
        <div>
          <textarea  onChange={onNewMessageChange}
                    value={props.newMessageBody}
                    placeholder='send yor message'
                    
                    />
        </div>
        <button onClick={onSendMessageClick}>add message</button>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
