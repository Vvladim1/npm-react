import React from "react";
import s from "./dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./dialog/dialogItem";
import Message from "./mesage/message";

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Victor" id="5" />
        <DialogItem name="Valera" id="6" />
      </div>

      <div className={s.messages_items}>
        <Message message='Hi!'/>
        <Message message='How are your it-kamasutra?!'/>
        <Message message='You!'/>
      </div>
    </div>
  );
};

export default Dialogs;
