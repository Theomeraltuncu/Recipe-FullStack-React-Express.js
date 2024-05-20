import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactSelect from "react-select/creatable";
import { toast } from "react-toastify";

const CreatePage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    let newRecipe = Object.fromEntries(formData.entries());

    newRecipe = {
      ...newRecipe,
      ingredients,
      instructions,
      image: "http://picsum.photos/500",
    };

    console.log(newRecipe);

    axios
      .post("http://127.0.0.1:4000/api/recipes", newRecipe)
      .then(() => {
        toast.success("New recipe successfully added.");
        navigate("/");
      })
      .catch(() => toast.error("Recipe is not created"));
  };
  return (
    <div className="flex-1 bg-gray-200 p-4 h-screen overflow-auto">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl m-auto my-10 flex flex-col gap-6"
      >
        <h1 className="text-3xl font-bold text-red-400">Add New Recipe</h1>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Recipe Name</label>
          <input
            className="rounded-md p-2 focus:outline-red-400"
            name="recipeName"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Recipe Category</label>
          <input
            className="rounded-md p-2 focus:outline-red-400"
            name="category"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Recipe Duration</label>
          <input
            className="rounded-md p-2 focus:outline-red-400"
            name="recipeTime"
            type="number"
            min={3}
            max={500}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Ingredients</label>
          <ReactSelect
            onChange={(options) => {
              const refined = options.map((opt) => opt.label);
              setIngredients(refined);
            }}
            isMulti
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Instructions</label>
          <ReactSelect
            onChange={(options) => {
              const refined = options.map((opt) => opt.label);
              setInstructions(refined);
            }}
            isMulti
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Serving Suggestion</label>
          <textarea
            name="servingSuggestion"
            className="p-2 rounded-md min-h-[150px] max-h-[300px] outline-red-400"
            required
          ></textarea>
        </div>

        <div className="flex justify-end gap-6">
          <Link
            to={"/"}
            className="bg-gray-400 px-4 py-2 rounded-md text-white hover:bg-gray-500 transition"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-red-400 px-4 py-2 rounded-md text-white hover:bg-red-500 transition"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
