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

  let newMessageEl = React.createRef();

  let addMessage = () => {
    let text = newMessageEl.current.value;
    props.dispatch({type: 'ADD-NEW-MESSAGE'});
    // props.addNewMessage(text);
  };

  let onMessageChange = () => {
    let text = newMessageEl.current.value;
    props.dispatch({type: 'UPDATE-NEW-MESSAGE--TEXT', newText: text});
    // props.upDateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElement}</div>
      <div>
        <div className={s.messages_items}>{messagesElements}</div>
        <div>
          <div>
            <textarea ref={newMessageEl} onChange={onMessageChange} value={props.state.newMessageText} />
          </div>
          <button onClick={addMessage}>add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
