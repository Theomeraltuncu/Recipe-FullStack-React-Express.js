import { TbClockHour8 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
  console.log(recipe);

  return (
    <Link to={`/recipe/${recipe.id}`} className="bg-white rounded-lg p-4">
      <div className="relative ">
        <img
          className="h-[150px] w-full object-cover rounded-lg"
          src={recipe.image}
          alt=""
        />
        <p className="absolute bottom-1 left-1 flex bg-white rounded-lg p-1 font-semibold items-center gap-1">
          <TbClockHour8 />
          <span>{recipe.recipeTime} minutes</span>
        </p>
      </div>

      <h2 className="font-semibold text-lg my-3">{recipe.recipeName}</h2>

      <p className="text-gray-500">{recipe.category}</p>

      <p className="flex gap-3">
        <span className="bg-gray-300 rounded-md p-1 line-clamp-1">
          {recipe.ingredients[0]}
        </span>

        {recipe.ingredients[1] && (
          <span className="bg-gray-300 rounded-md p-1 line-clamp-1">
            {recipe.ingredients[1]}
          </span>
        )}
      </p>
    </Link>
  );
};

export default Card;
