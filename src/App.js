import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import Content from "./components/content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import Musik from "./components/musik/musik";
import News from "./components/news/news";
import Settings from "./components/settings/settings";

const App = props => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                state={props.state.dialogsPage}
                addNewMessage={props.addNewMessage}
                upDateNewMessageText={props.upDateNewMessageText}
              />
            )}
          />
          <Route
            path="/content"
            render={() => (
              <Content
                state={props.state.profilePage}
                addNewPost={props.addNewPost}
                upDateNewPostText={props.upDateNewPostText}
              />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/musik" component={Musik} />
          <Route path="/settings" component={Settings} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
