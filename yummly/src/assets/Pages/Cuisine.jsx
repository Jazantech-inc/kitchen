import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cuisine } from "../Redux/Slice/Cuisine";
import { useParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import RecipeItem from "../Components/RecipeItem";
const Cuisine = () => {

  const CapitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  let params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `${CapitalizeFirstLetter(params.type)} - Cookniverse`;
    dispatch(cuisine(params.type));

  }, [params.type]);


  const {data,progress} = useSelector((state) => state.cuisine);

  return (
    <>
      <LoadingBar
        shadow={true}
        height={3}
        color="#f11946"
        progress={progress}
      />
      <div className="lg:w-3/4 lxl:w-4/5 lg:ml-auto lg:-mt-10 lxl:ml-auto">
        <div>
          <h1 className="text-center text-5xl  p-2 mt-14 mb-5 ">
            {params.type === "Indian" ? "Pakistan" : params.type}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 flex-wrapper ">
          {data.results &&
            data.results.map((item) => {
              return (
                <RecipeItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                sourceName={item.sourceName}
                dishTypes={item.dishTypes}
                readyInMinutes={item.readyInMinutes}
                servings={item.servings}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Cuisine;
