// Action Types
import { ADD_SOMETHING } from './actionTypes';
import { DELETE_SOMETHING } from './actionTypes';

// Dispatch Functions
export const addSomething = (name) => {
    return {
        type: ADD_SOMETHING,
        name
    };
};

export const deleteSomething = (id) => {
    return {
        type: DELETE_SOMETHING,
        id
    };
};
