import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    
    <div className={`flex flex-col w-80 overflow-hidden p-5 ${localStorage.getItem("darkMode") === "true" ? "bg-gray-800 text-white" : "bg-white text-black"} shadow-xl gap-5 border-2 rounded-2xl border-white`}>
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
          src={item?.image_url}
          alt="recipe item"
          className="block w-full cursor-pointer object-cover transition duration-500 hover:scale-110"
        />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white hover:bg-gray-500"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
