import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

import comments from '../reducers/commentsReducer';
import promiseMiddleware from '../../../server/utils/promiseMiddleware';

const loggerMiddleware = createLogger();

const enhancer = compose(
  applyMiddleware(
    promiseMiddleware,
    loggerMiddleware
  )
);

const reducers = combineReducers({
  comments,
});

export function configureStore(initialState = {}) {
  return createStore(
    reducers,
    initialState,
    enhancer
  );
}
