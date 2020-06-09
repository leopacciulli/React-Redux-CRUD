import { combineReducers } from 'redux';
import { user } from '../user';
import { IReduxState } from '../types';

export default combineReducers<IReduxState>({
  user,
});
