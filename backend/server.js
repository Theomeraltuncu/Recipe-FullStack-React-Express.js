const express = require("express");
const cors = require("cors");
const { getAllRecipes, getRecipe } = require("./controllers/recipeController");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

app.use(express.json());

app.use(cors());

app.use(recipeRoutes);

// app.route("/api/recipes").get(getAllRecipes).post(()=> {

// })

// app.route("/api/recipes/:id").get(getRecipe).delete(()=>{

// })
// .patch(()=>{})

app.listen(4000, () => {
  console.log("server 4000 port listening");
});
