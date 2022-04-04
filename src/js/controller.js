import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2
// 4f03691b-65d3-46e7-989a-154e67bfa033
// 5ed6604591c37cdc054bc886
// 5ed6604591c37cdc054bc90b
///////////////////////////////////////
// https://forkify-api.herokuapp.com/api/v2/recipes/:id

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();
    // 1 loading recipe
    await model.loadRecipe(id);
    // 2 Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
