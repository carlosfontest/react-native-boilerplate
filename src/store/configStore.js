// Redux
import { createStore, combineReducers, compose } from 'redux';

// Reducers
import reducer1 from './reducers/reducer1';


// Combine all the reducers in one
const rootReducer = combineReducers({
  reducer1
});

// Config to Debugging with React Native Debugger
let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// Function to Create the Store
const configStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configStore;