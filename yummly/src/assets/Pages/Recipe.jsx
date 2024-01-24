import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getinformation } from "../Redux/Slice/Recipe";
import { BsClockHistory } from 'react-icons/bs';
import LoadingBar from "react-top-loading-bar";
const Recipe = () => {




  const params = useParams();
  const [activeTab, setActiveTab] = useState("instructions");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getinformation(params.id));
  }, [params.id]);

  const {id,data,progress} = useSelector((state) => state.inform);
console.log(data)
  return (
    <>
    <LoadingBar
        shadow={true}
        height={3}
        color="#f1df19"
        progress={progress}
      />
    
    <div className="w-full flex flex-col justify-center my-14 lg:w-3/4 lg:ml-auto lg:mt-4  lxl:w-4/5 lxl:ml-auto">
          <h1 className="text-2xl font-serif text-center mb-3 ">Recipe Detail</h1>
      <div key={id} className="  flex flex-col">

        <img
          className="w-screen rounded-md"
          src={data.image}
          alt={data.title}
        />
        <div className="flex w-44 mt-5 ml-5">
        <p className="font-medium text-sm"> <BsClockHistory className="text-lg"/>  PREP TIME <span className="font-bold text-2xl">{data.preparationMinutes}</span></p>
        <p className="font-medium text-sm"> <BsClockHistory className="text-lg"/> COOK TIME  <span className="font-bold text-2xl">{data.cookingMinutes}</span></p>
        <p className="font-medium text-sm"> <BsClockHistory className="text-lg"/> READY TIME <span className="font-bold text-2xl"> {data.readyInMinutes}</span></p>
        </div>
        <hr className="w-64 ml-4 my-5" />
        <h2 className=" text-3xl font-serif font-bold">
          {data.title}
        </h2>
       
        <div className="flex justify-between">
        <p className=" mr-5 font-medium">{data.healthScore} - Health Score</p>
        </div>
      </div>
      <div className=" flex flex-col">

        <div className="flex my-3 w-100% justify-center items-center">
          <button
            className=" font-semibold font-serif text-black outline border p-0.5 mr-1 mm:p-1  rounded-sm"
            onClick={() => setActiveTab("instructions")}
            style={{
              backgroundColor: activeTab === "instructions" ? "gray" : "white",
            }}
          >
            Instructions
          </button>

          <button
            className=" text-black font-semibold font-serif outline border p-0.5 ml-0.5 mr-1 mm:p-1 mm:ml-1  rounded-sm "
            onClick={() => setActiveTab("ingredients")}
            style={{
              backgroundColor: activeTab === "ingredients" ? "gray" : "white",
            }}
          >
            Ingredients
          </button>
          
          <button
            className=" font-semibold font-serif text-black outline border p-0.5 mr-1 ml-0.5 mm:p-1 mm:ml-1  rounded-sm"
            onClick={() => setActiveTab("summary")}
            style={{
              backgroundColor: activeTab === "summary" ? "gray" : "white",
            }}
          >
            Summary
          </button>
        </div>

        {activeTab === "instructions" && (
          <div>
            <h1 className="font-bold text-4xl">Recipe Steps</h1>

           


            <h3
              className=" text-xl"
              dangerouslySetInnerHTML={{
                __html: data.instructions,
              }}
            ></h3>
          </div>
        )}

{activeTab === "summary" && (
          <div>
            <h3
              className=" text-lg"
              dangerouslySetInnerHTML={{ __html: data.summary }}
            ></h3>
          </div>
        )}

        {activeTab === "ingredients" && (
          <div className="p-4 ">
            {data.extendedIngredients.map((ingredient) => (
              <div className=" flex items-center leading-tight text-lg my-1 bg-slate-300 p-2 font-serif rounded-lg" key={ingredient.id}>
                <div className="rounded-md bg-white">
                <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt="" className="rounded-md" /> 
                </div>
                <div className="ml-5 lg:flex lg:items-center">
               <p className="font-semibold"> {ingredient.name}</p>
               <small className="font-medium lg:self-end lg:ml-[26rem] lxl:ml-[29rem] ">{ingredient.original}</small>
               </div>
              </div>

            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Recipe;
