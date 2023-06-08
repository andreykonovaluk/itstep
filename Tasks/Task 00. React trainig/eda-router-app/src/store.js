import { createStore, compose, applyMiddleware } from 'redux';

const initialState = {};
const enhancers = [];
const composedEnhancers = compose(
    applyMiddleware(),
    ...enhancers,
);

export const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);