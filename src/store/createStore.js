import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';

const logger = createLogger({ diff: true, collapsed: true })

export default (initialState = {}) => {
    const middleware = [thunk, logger];

    const enhancer = [];

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancer
        )
    )
    return store;
};
