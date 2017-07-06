import * as ActionTypes from './ActionTypes.js';
import AppDispatcher from '../AppDispatcher.js';

export const increment = (counterCaption) => {
    AppDispatcher.dispatch(
        {
            type: ActionTypes.INCREMENT,
            counterCaption
        }
    );
}

export const decrement = (counterCaption) => {
    AppDispatcher.dispatch(
        {
            type: ActionTypes.DECREMENT,
            counterCaption
        }
    );
}