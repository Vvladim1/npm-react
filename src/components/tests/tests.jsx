import React from "react";
// import { addTestCreator, updateNewTestTextCreator } from "../redux/test-reducer";
import TestItem from "./test/test";

const Tests = props => {

  let testsElement = props.arreys.map(data => (
    <TestItem test={data.test} id={data.id} />
  ));

  let newTestText = props.newTestText;

  let onTestTextClick = () => {
    props.onTestTextClick();
  }

  let onNewTestChange = (e) => {
    let testtext = e.target.value;
    props.onNewTestChange(testtext);
  }

  return (
    <div>
      <div>{testsElement}</div>
      
        <div>
          <textarea  onChange={onNewTestChange}
                    value={newTestText}
                    placeholder='send yor test'
                    />
        </div>
        <button onClick={onTestTextClick}>add test</button>
      </div>
  );
};

export default Tests;
