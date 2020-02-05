import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import state from "./components/redux/state";
import { addNewPost, upDateNewPostText, subscribe } from "./components/redux/state";
import { BrowserRouter } from "react-router-dom";

// addNewPost('hhhhhhhhh');

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addNewPost={addNewPost} 
      upDateNewPostText={upDateNewPostText} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
