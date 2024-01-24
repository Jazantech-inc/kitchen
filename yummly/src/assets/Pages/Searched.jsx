import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../Redux/Slice/Searched";
import LoadingBar from "react-top-loading-bar";
import RecipeItem from "../Components/RecipeItem";
import Search from "../Components/Search"
const Searched = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearch(params.search));
  }, [params.search]);

  const {progress,data,isLoading} = useSelector((state) => state.searching);

  return (
    <>
      <LoadingBar
        shadow={true}
        height={3}
        color="#f11946"
        progress={progress}
      />
      <div className="md:absolute md:left-full md:-top-28 lg:absolute lg:left-72  lg:-top-20 lg:w-2/3  ">
      <Search/>
      </div>
      <div className="lg:w-3/4 lg:ml-auto lg:mt-7 lxl:w-4/5 lxl:ml-auto">
        <div className="grid">
          <h1 className="text-xl p-2 mt-16">
            <span className="text-slate-500"> Result for : </span>{" "}
            {params.search}
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
export default Searched;
