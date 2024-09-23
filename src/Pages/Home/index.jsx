import { useContext } from "react";
import { GlobalContext } from "../../Context";
import RecipeItem from "../../Component/recipe-list";
import img from '../Home/Restaurant_Ad_Video_Template__Editable_(720p).mp4'


export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please wait!</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something
          </p>
        </div>
      )}

    </div>
  );
}
