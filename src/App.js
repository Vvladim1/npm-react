import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import Content from "./components/content/Content";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from "react-router-dom";
import Musik from "./components/musik/musik";
import News from "./components/news/news";
import Settings from "./components/settings/settings";
import TestsContainer from './components/tests/testsContainer';

const App = props => {
  return (
    <div className="wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <DialogsContainer store={props.store} 
                                            dispatch={props.dispatch} />}
          />
          <Route
            path="/content"
            render={() => (
              <Content
                store={props.store}
                dispatch={props.dispatch} 
              />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/musik" component={Musik} />
          <Route path="/settings" component={Settings} />
          <Route
            path="/test"
            render={() => (
              <TestsContainer store={props.store} dispatch={props.dispatch} />
            )}
          />
        </div>
    </div>
  );
};

export default App;
