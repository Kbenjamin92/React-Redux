import * as actions from './actions';

const initialState = { count: 0 };

export const counter = (state = initialState, action) => {
    switch(action.type) {
        case actions.INCREMENT:
            return { count: state.count + 1 };
        case actions.DECREMENT:
            return { count: state.count - 1};
        default:
            return state;
    }
}