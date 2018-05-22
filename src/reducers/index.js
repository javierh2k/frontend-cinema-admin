import { combineReducers } from 'redux';
import MovieReducer from './movies';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  movieStore: MovieReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;