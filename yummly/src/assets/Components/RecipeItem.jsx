import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const RecipeItem = (props) => {
    const {id,title,image,dishTypes,sourceName,readyInMinutes,servings}=props
    return (
        <>
            <div
                key={id}
                className="recipe-item border rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
                <NavLink to={`/recipe/${id}`}>
                    <div>
                        <div>
                            <img
                                src={image}
                                alt={title}
                                className="w-full object-cover"
                            />
                        </div>

                        <div className="ri-info p-3">
                            <div className="flex text-2xl font-bold text-gray-800">
                                <div className="w-full">
                                    <h3>
                                        <p className="hover:text-orange-500 transition duration-300 lxl:text-sm lg:text-base md:text-lg">
                                            {title}
                                        </p>
                                    </h3>
                                    <p className="text-sm">
                                        By &nbsp;
                                        <span className="hover:underline hover:text-orange-700 transition duration-300">
                                            {sourceName}
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
                                        {dishTypes[0]}/{dishTypes[1]}/{dishTypes[2]}/
                                        {dishTypes[3]}
                                    </span>
                                </div>
                                <div className="w-auto flex items-center">
                                    <span className="flex items-center">
                                        <BsClockHistory /> &nbsp; {readyInMinutes}
                                    </span>
                                    <span className="flex items-center ml-auto">
                                        <GiForkKnifeSpoon /> &nbsp; {servings}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </>
    );
};

export default RecipeItem;
