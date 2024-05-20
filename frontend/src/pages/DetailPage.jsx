import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Loader from "./../components/Loader";
import Error from "./../components/Error";
import { FaRegClock } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
//import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`http://127.0.0.1:4000/api/recipes/${id}`)
      .then((res) => setData(res.data.recipe))
      .catch((err) => setError(err.response.data.message))
      .finally(() => setIsLoading(false));
  }, []);

  const handleDelete = () => {
    if (confirm("Are you sure?")) {
      axios
        .delete(`http://127.0.0.1:4000/api/recipes/${id}`)
        .then(() => {
          toast.success("Recipe deleted successfully");
          navigate("/");
        })
        .catch(() => {
          toast.error("We could not delete the recipe");
        });
    }
  };

  return (
    <div className="flex-1 bg-gray-200 p-3 h-screen overflow-auto">
      <div className="flex justify-between">
        <Link
          to={-1}
          className="items-center gap-4 text-xl hover:bg-gray-400 p-1 rounded-md flex"
        >
          <IoMdArrowRoundBack />
          Back
        </Link>
        <button
          onClick={handleDelete}
          className="bg-gray-400 flex items-center gap-3 px-4 py-2 rounded-md text-white hover:bg-red-500 transition"
        >
          <FaTrashAlt />
        </button>
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className="max-w-5xl m-auto my-4 flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{data.recipeName}</h1>
          <div className="flex gap-4">
            <span className="bg-red-500 py-2 px-4 rounded-lg text-white font-semibold">
              {data.category}
            </span>
            <span className="bg-red-500 py-2 px-4 rounded-lg text-white font-semibold flex items-center gap-2">
              <FaRegClock /> {data.recipeTime}
            </span>
          </div>
          <img
            className="rounded-lg max-h-[400px]"
            src={data.image}
            alt={data.recipeName}
          />

          <div>
            <h1 className="text-2xl font-bold mb-3">Ingredients</h1>
            <ul className="font-semibold text-lg list-disc ms-4">
              {data.ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4 text-red-600">
              Instructions - How to prepare?
            </h1>
            <ol className="font-semibold text-lg list-decimal ps-4">
              {data.instructions.map((item) => (
                <li>{item}</li>
              ))}
            </ol>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4 text-red-400">
              Serving suggestion
            </h1>
            <p className="font-semibold text-lg">{data.servingSuggestion}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
