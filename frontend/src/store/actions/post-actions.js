import { ACTION_TYPE } from './action-types';

export const setPostData = (postData) => ({
  type: ACTION_TYPE.SET_POST_DATA,
  payload: postData,
});

export const resetPostData = {
  type: ACTION_TYPE.RESET_POST_DATA,
};
