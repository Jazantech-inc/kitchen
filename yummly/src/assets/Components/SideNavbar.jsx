import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
const SideNavbar = () => {

    const open = () => {
        document.querySelector(".sidebar").classList.toggle("left-[0px]");
    };

    return (
        <>
            <div className="bg-white -ml-4 shadow-xl flex w-screen z-50 h-[12%] items-center fixed top-0  lg:hidden ">
                <GiHamburgerMenu
                    className="ml-3 text-gray-500 text-2xl cursor-pointer"
                    onClick={open}
                />
                <div>
                    <h1 className="ml-6 cursor-pointer font-serif">Cookniverse</h1>
                    <h1 className="font-serif text-sm ml-3">
                        Explore Over <span className="font-bold"> 50,000+ </span> Unique
                        Recipes
                    </h1>
                </div>
            </div>

            <div
                className="sidebar fixed top-0 bottom-0 left-[-300px] z-50 lg:left-0 lg:w-1/4 lg:shadow-md 
    duration-1000 h-screen p-2 w-3/5  lm:w-1/2 sm:w-1/3 overflow-y-auto bg-white lxl:w-1/5"
            >
                <RxCross2
                    className={` text-2xl text-gray-500 cursor-pointer lg:hidden `}
                    onClick={open}
                />

                <h1 className="cursor-pointer font-mono text-xl flex justify-center items-center ">
                    Cookniverse
                </h1>
                <h1 className="font-serif text-sm ml-3">
                    Explore Over <span className="font-bold"> 50,000+ </span> Unique
                    Recipes
                </h1>

                <hr className="my-5 text-gray-600" />

               

                <div className=" mt-5 p-2 relative duration-300 cursor-pointer">
                    <NavLink to="/" className=" link " onClick={open}>
                        Home
                    </NavLink>
                </div>
                <hr className=" text-gray-600" />
                <div className="p-2 relative flex items-center  duration-300 cursor-pointer">
                    <NavLink to="mealplan" className=" link">
                        Meal Plan
                    </NavLink>
                </div>

                <hr className="text-gray-600" />

           

                <div className="  relative p-2 duration-300 cursor-pointer">
                    <NavLink to="/about" className="link">
                        About Us
                    </NavLink>
                </div>
                <hr className="text-gray-600" />
                <div className="  relative p-2 duration-300 cursor-pointer">
                    <NavLink to="/contact" className="link">
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default SideNavbar;
