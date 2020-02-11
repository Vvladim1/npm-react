import React from "react";
import { addTestCreator, updateNewTestTextCreator } from "../redux/test-reducer";
import Tests from './tests';

const TestsContainer = props => {

  let arreys = props.store.getState().testReducer.arreys;
  let newTestText = props.store.getState().testReducer.newTestText;

  let onTestTextClick = () => {
    props.dispatch(addTestCreator());
  }

  let onNewTestChange = (testtext) => {
    // let testtext = e.target.value;
    props.dispatch(updateNewTestTextCreator(testtext));
  }

  return <Tests onTestTextClick={onTestTextClick} 
               onNewTestChange={onNewTestChange}
               arreys={arreys}
               newTestText={newTestText} />
};

export default TestsContainer;
