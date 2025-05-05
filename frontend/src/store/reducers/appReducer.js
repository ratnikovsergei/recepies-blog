import { ACTION_TYPE } from '../actions';

const initialState = {
  modal: {
    isOpen: false,
    text: '',
    onConfirm: () => {},
    onCancel: () => {},
  },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...action.payload,
          isOpen: true,
        },
      };
    case ACTION_TYPE.CLOSE_MODAL:
      return {
        ...state,
        modal: {
          ...initialState.modal,
        },
      };
    default:
      return state;
  }
};
