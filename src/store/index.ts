import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { newsReducer } from './newsReducer';
import { newestReducer } from './newestReducer';
import { askReducer } from './askReducer';
import { showReducer } from './showReducer';
import { jobsReducer } from './jobsReducer';

const rootReducer = combineReducers({
  newsReducer,
  newestReducer,
  askReducer,
  showReducer,
  jobsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
