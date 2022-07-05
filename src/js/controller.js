import * as model from './model.js';
import recipeView from './views/recipeView.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
// console.log('icons');

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



console.log('TEST');
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if(!id) return;
    recipeView.renderSpinner();

    // loading recipe
    
await model.loadRecipe(id);

    // rendering recipe
recipeView.render(model.state.recipe);

  } catch (err) {
    console.error(`${err}****`);
  }
};

const controlSearchResults = async function() {
  try{
await model.loadSearchResults('pizza');
console.log(model.state.search.results);
  }catch(err) {
    console.log(err);
  }
};
controlSearchResults();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
