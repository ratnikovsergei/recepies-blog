import { ACTION_TYPE } from '../actions';

const initialState = {
  id: '',
  title: '',
  image: '',
  category: '',
  ingredients: [],
  instructions: '',
  comments: [],
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_RECIPE_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case ACTION_TYPE.RESET_RECIPE_DATA:
      return initialState;
    default:
      return state;
  }
};
