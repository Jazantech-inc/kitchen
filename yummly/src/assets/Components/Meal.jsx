import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { getinformation } from "../Redux/Slice/Recipe";
import { useDispatch, useSelector } from "react-redux";
const Meal = ({ meal }) => {

  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.inform);
  
  useEffect(()=>{
   
    dispatch(getinformation(meal.id))
  })



  return (
    <div className="m-1 shadow-md shadow-slate-500">
      <h1>{meal.title}</h1>
      <img src={data.image} alt={meal.title} className="w-full mb-4"  />
      <ul>
        <li>Preparation time:{meal.readyInMinutes} minutes</li>
        <li>Number of Servings:{meal.servings}</li>
      </ul>
      <Link to={meal.sourceUrl} className="bg-purple-500 p-2">Go to Recipe</Link>
    </div>
  );
};

export default Meal;
