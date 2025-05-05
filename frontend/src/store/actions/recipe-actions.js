import { ACTION_TYPE } from './action-types';

export const setRecipeData = (recipeData) => ({
  type: ACTION_TYPE.SET_RECIPE_DATA,
  payload: recipeData,
});

export const resetRecipeData = {
  type: ACTION_TYPE.RESET_RECIPE_DATA,
};
