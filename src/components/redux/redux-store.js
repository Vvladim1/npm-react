import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import testReducer from './test-reducer';

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer:dialogsReducer,
    testReducer: testReducer
});

let store = createStore(reducers);

export default store;