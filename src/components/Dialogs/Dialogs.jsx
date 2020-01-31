import React from "react";
import s from "./dialogs.module.css";

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={s.dialog}>Dimych</div>
        <div className={s.dialog + ' ' + s.active}>Andrey</div>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Sasha</div>
        <div className={s.dialog}>Victor</div>
        <div className={s.dialog}>Valera</div>
      </div>

      <div className={s.messages_items}>
        <div className={s.message}>Hi!</div>
        <div className={s.message}>Hoe are your it-kamasutra?</div>
        <div className={s.message}>You!</div>
      </div>
    </div>
  );
};

export default Dialogs;
