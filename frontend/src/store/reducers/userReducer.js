import { ACTION_TYPE } from '../actions';
import { ROLE } from '../../constants';

const initialState = {
  id: null,
  login: null,
  email: null,
  role: ROLE.GUEST,
  token: null,
  isAuth: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGIN_USER:
    case ACTION_TYPE.REGISTER_USER:
    case ACTION_TYPE.SET_USER:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };

    case ACTION_TYPE.LOGOUT:
      return initialState;

    case ACTION_TYPE.UPDATE_USER_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};
