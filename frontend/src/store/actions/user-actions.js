import { ACTION_TYPE } from './action-types';

export const loginUser = (userData) => ({
  type: ACTION_TYPE.LOGIN_USER,
  payload: userData,
});

export const registerUser = (userData) => ({
  type: ACTION_TYPE.REGISTER_USER,
  payload: userData,
});

export const setUser = (userData) => ({
  type: ACTION_TYPE.SET_USER,
  payload: userData,
});

export const logout = {
  type: ACTION_TYPE.LOGOUT,
};

export const updateUserRole = (newRole) => ({
  type: ACTION_TYPE.UPDATE_USER_ROLE,
  payload: newRole,
});
