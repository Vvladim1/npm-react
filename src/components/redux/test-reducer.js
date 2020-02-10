const ADD_TEST_TEXT = 'ADD-TEST-TEXT';
const UPDATE_NEW_TEST_TEXT = "UPDATE-NEW-TEST-TEXT";


const testReducer = (state,action) => {

    switch (action.type) {
        case UPDATE_NEW_TEST_TEXT:
            state.newTestText = action.testtext;
            return state;
        case ADD_TEST_TEXT:
            let testtext = state.newTestText;
          state.newTestText = '';
          state.arreys.push({id: 4, test: testtext});
          return state;
        default:
            return state;
    }
}

export const addTestCreator = () => ({ type: ADD_TEST_TEXT });
export const updateNewTestTextCreator = testtext =>({
  type: UPDATE_NEW_TEST_TEXT,
  testtext: testtext
});

export default testReducer;