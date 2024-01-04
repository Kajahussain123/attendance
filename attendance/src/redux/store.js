import { createStore, applyMiddleware, combineReducers } from 'redux';
import studentReducer from './studentReducer';
import { thunk } from 'redux-thunk';



const rootReducer = combineReducers({
  student: studentReducer,
 
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
