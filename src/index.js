import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import state from "./components/redux/state";
import {
  addNewPost,
  addNewMessage,
  upDateNewPostText,
  upDateNewMessageText, 
  subscribe
} from "./components/redux/state";
import { BrowserRouter } from "react-router-dom";

// addNewPost('hhhhhhhhh');

let rerenderEntireTree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addNewPost={addNewPost}
        upDateNewPostText={upDateNewPostText} 
        addNewMessage={addNewMessage}
        upDateNewMessageText={upDateNewMessageText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
