import { ACTION_TYPE } from './action-types';

export const openModal = (modalParams) => ({
  type: ACTION_TYPE.OPEN_MODAL,
  payload: modalParams,
});

export const closeModal = {
  type: ACTION_TYPE.CLOSE_MODAL,
};
