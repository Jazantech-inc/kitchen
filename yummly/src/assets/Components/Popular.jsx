import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopular } from "../Redux/Slice/Popular";
import LoadingBar from "react-top-loading-bar";
import RecipeItem from "./RecipeItem";

const Popular = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopular());
  }, []);
  const {progress,data} = useSelector((state) => state.popular);
  return (
    <>
      <LoadingBar
        shadow={true}
        height={3}
        color="#f11946"
        progress={progress}
      />
      <div className="my-12 sm:my-20 lg:my-8">
        <div className="mb-8 lg:ml-7">
          <h3 className="text-2xl font-serif sm:text-3xl lg:text-4xl ">
            Just For You
          </h3>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lxl:grid-cols-4 gap-3 flex-wrapper ">
            {data.recipes && data.recipes.map((recipe) => {
              return (
                <RecipeItem
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                  sourceName={recipe.sourceName}
                  dishTypes={recipe.dishTypes}
                  readyInMinutes={recipe.readyInMinutes}
                  servings={recipe.servings}
                />
              );
            })}
          </div>
      </div>
    </>
  );
};
export default Popular;
