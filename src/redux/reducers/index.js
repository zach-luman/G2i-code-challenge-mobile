import {
  compose,
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import quiz from './quiz';

const root = combineReducers({
  quiz,
});

const store = createStore(
  root,
  undefined,
  compose(
    applyMiddleware(thunk),
  ),
);

export default store;
