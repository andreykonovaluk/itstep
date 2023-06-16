import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

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
export const history = createBrowserHistory();