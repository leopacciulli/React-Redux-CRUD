import { Action, Reducer } from 'redux';

import * as actions from './actions';
import { IUserState } from './types';

export const initialState: IUserState = {
  username: '',
};

export const user: Reducer<IUserState> = (
  state = initialState,
  action: Action | any,
) => {
  switch (action.type) {
    case actions.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
