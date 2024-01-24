import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { veggie } from "../Redux/Slice/Veggie";
import { AiOutlineHeart } from "react-icons/ai";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsClockHistory } from "react-icons/bs";

const Veggie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(veggie());
  }, []);

  const {data} = useSelector((state) => state.veggie);

  return (
    <div className="my-12">
      <div className=" mb-8">
        <h3 className="text-2xl text-gray-500">Veggie Picks</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 flex-wrapper ">
        {data.recipes &&
          data.recipes.map((recipe) => {
            return (
              <div
                key={recipe.id}
                className={`recipe-item border rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out`}
              >
                <Link to={`/recipe/${recipe.id}`}>
                  <div>
                    <div>
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full object-cover"
                      />
                    </div>

                    <div className="ri-info p-3">
                      <div className="flex text-2xl font-bold text-gray-800">
                        <div className="w-full">
                          <h3>
                            <p className="hover:text-orange-500 transition duration-300">
                              {recipe.title}
                            </p>
                          </h3>
                          <p className="text-sm">
                            By &nbsp;
                            <span className="hover:underline hover:text-orange-700 transition duration-300">
                              {recipe.sourceName}
                            </span>
                          </p>
                        </div>
                        <div className="w-auto">
                          <span className="cursor-pointer">
                            <AiOutlineHeart />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="ri-footer p-1 font-semibold tracking-wide text-gray-900">
                      <div className="flex flex-col">
                        <div className="w-full flex items-center">
                          <span className="hover:text-orange-700 transition duration-300">
                            {recipe.dishTypes[0]}/{recipe.dishTypes[1]}/
                            {recipe.dishTypes[2]}/{recipe.dishTypes[3]}
                          </span>
                        </div>
                        <div className="w-auto flex items-center">
                          <span className="flex items-center">
                            <BsClockHistory /> &nbsp; {recipe.readyInMinutes}
                          </span>
                          <span className="flex items-center ml-auto">
                            <GiForkKnifeSpoon /> &nbsp; {recipe.servings}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Veggie;
