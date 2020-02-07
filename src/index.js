import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from './components/redux/state';
import { BrowserRouter } from "react-router-dom";

// addNewPost('hhhhhhhhh');

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()} 
      dispath={store.dispath.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
