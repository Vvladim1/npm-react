import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./dialog/dialogItem";
import Message from "./mesage/message";

const Dialogs = props => {
  let dialogsElement = props.state.dialogs.map(data => (
    <DialogItem name={data.name} id={data.id} />
  ));
  let messagesElements = props.state.messages.map(datas => (
    <Message message={datas.message} />
  ));
let sendMessage = () => {
  alert('all right!');
};
let onMBodyChange = () => {};

  

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElement}</div>
      <div>
        <div className={s.messages_items}>{messagesElements}</div>
        <div>
          <div>
            <textarea onChange={onMBodyChange} value={props.state.newMessageBody} />
          </div>
          <button onClick={sendMessage}>add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
