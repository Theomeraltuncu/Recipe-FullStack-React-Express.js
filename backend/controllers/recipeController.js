const { getData } = require("../utils/getData");
const cyrpto = require("crypto");
const { setData } = require("../utils/setdata");

let data = getData();

console.log(data);

exports.getAllRecipes = (req, res) => {
  let recipes = [...data];

  const searchTerm = req.query?.title?.trim()?.toLowerCase();

  const order = req.query.order;

  if (searchTerm) {
    recipes = data.filter((recipe) =>
      recipe.recipeName.toLowerCase().includes(searchTerm)
    );

    res.status(200).json({
      message: "Recipes successfully filtered",
      results: recipes.length,
      recipes: recipes,
    });
  }
  if (order) {
    recipes.sort((a, b) =>
      order === "asc"
        ? a.recipeTime - b.recipeTime
        : b.recipeTime - a.recipeTime
    );
  }
  res.status(200).json({
    message: "Recipes successfully sent",
    results: recipes.length,
    recipes: recipes,
  });
};
exports.getRecipe = (req, res) => {
  // const recipe = data.find((i) =>i.id == req.params.id)

  // if(!recipe){
  //     return res.status(404).json({message: "Recipe not found" })
  // }

  res.status(200).json({
    message: "Receipe found",
    recipe: req.recipe,
  });
};
exports.createRecipe = (req, res) => {
  const newRecipe = req.body;

  if (
    !newRecipe.recipeName ||
    !newRecipe.recipeTime ||
    !newRecipe.category ||
    !newRecipe.ingredients ||
    !newRecipe.instructions ||
    !newRecipe.image
  ) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  newRecipe.id = crypto.randomUUID();

  data.push(newRecipe);

  setData(data);

  return res
    .status(200)
    .json({ message: "New recipe successfully created", recipe: data });
};
exports.deleteRecipe = (req, res) => {
  const index = data.findIndex((i) => i.id == req.params.id);

  data.splice(index, 1);

  setData(data);

  res.status(204).json({ message: "Recipe removed successfully" });
};
