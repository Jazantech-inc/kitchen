import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState("");
    const [search, setSearch] = useState(true);

    const handlerestText = () => {
        let newText = "";
        setInput(newText);
    };

    const handleClick=()=>{
        if(search===true){
        setSearch(false)
document.querySelector("#search").classList.toggle("-top-[-60px]")
        }else{
            setSearch(true)
document.querySelector("#search").classList.toggle("-top-[-60px]")
        }
    }
   

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`);
   
    };

    return (

        <>
        <div className="lg:relative">
            <div className="lg:hidden">
            <IoIosSearch className={`absolute top-28 right-1 bg-slate-100 text-5xl p-3 duration-1000 rounded-full cursor-pointer ${search?"block":"hidden"} sm:top-44 md:top-56 md:right-7 md:text-7xl md:p-5 `} onClick={handleClick}/>
            <IoMdClose className={`absolute top-28 right-1 bg-slate-100 text-5xl p-3 duration-1000 rounded-full cursor-pointer ${!search?"block":"hidden"} mm:top-32 sm:top-44 md:top-56 md:right-7 md:text-7xl md:p-5 `} onClick={handleClick}/>
            </div>
                <form onSubmit={submitHandler} className=" fixed -top-1 left-[2.2px] duration-1000 z-20 mm:w-full mm:left-0 lg:w-4/5 lg:absolute lg:left-36 lg:top-28  lxl:left-48 lxl:w-[78%]   " id="search">
                    <FaSearch className="absolute top-1/3 text-xl translate-x-2/3 text-orange-600 " />

                    <input
                        type="text"
                        placeholder="Search Your Recipes"
                        value={input}
                        className=" placeholder:text-black placeholder:font-serif border-none text-lg 
                shadow-xl   py-4 px-12  outline-none font-serif duration-1000 rounded-full mm:w-full 
                lg:w-4/5 lg:hover:shadow-inner"
                        onChange={handleChange}
                    />
                     <RxCrossCircled
                        className="absolute top-1/3 right-8 text-xl cursor-pointer text-orange-600 lg:right-40 lxl:right-44 "
                        onClick={handlerestText}
                    /> 
                </form>
                </div>
                </>
    );
};

export default Search;
