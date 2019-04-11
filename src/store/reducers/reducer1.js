// Import all types of actions
import { ADD_SOMETHING, DELETE_SOMETHING } from '../actions/actionTypes'

// Declaration of the initial state
const initialState = {
  arrayOfSomething: []
};

// Reducer with the cases
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SOMETHING:
      return {
        ...state,
        arrayOfSomething: [...state.arrayOfSomething, { 
          name: action.name,
          id: Math.random()
        }]
      };

    case DELETE_SOMETHING:
      return {
        ...state,
        arrayOfSomething: state.arrayOfSomething.filter((something) => {
          return something.id !== action.id;
        })
      };

    default:
      return state;
  }
};

export default reducer;