import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./dialog/dialogItem";
import Message from "./mesage/message";

let dialogs = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Victor" },
  { id: 6, name: "Valera" }
];

let dialogsElement = dialogs.map(data => (<DialogItem name={data.name} id={data.id} />));

let messages = [
  { message: "Hi!" },
  { message: "How are your it-kamasutra?" },
  { message: "Yo!!" }
];

let messagesElements = messages.map(datas => (<Message message={datas.message} />));

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElement}
      </div>

      <div className={s.messages_items}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
