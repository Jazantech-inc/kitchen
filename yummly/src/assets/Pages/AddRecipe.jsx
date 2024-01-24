import React, { useState, useEffect } from "react";
import Recipeform from "../Components/Recipeform";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";
import { SetLoader } from "../Redux/Slice/Loader";
import { FetchRecipes, DeleteRecipe } from "../apicall/recipes";

const AddRecipe = () => {
  const [showForm, setShowform] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState([]);
  const [recipe, setRecipe] = useState();
  console.log(recipe)
  let dispatch = useDispatch();

  const fetchData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await FetchRecipes();
      dispatch(SetLoader(false));
      if (response.success) {
        setRecipe(response.recipes);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  const deleteRecipe = async (id) => {
    try {
      dispatch(SetLoader(true));
      const response = await DeleteRecipe(id);
      dispatch(SetLoader(false));
      if (response.success) {
        message.success(response.message);
        fetchData();
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setShowform(true);
            setSelectedRecipe(null);
          }}
        >
          Add Recipe
        </Button>
        {recipe&&recipe.map((item)=>{
          return(
          <div key={item._id}>
            <div>
              <div>
                <img src={item.images} alt={item.recipename} />
              </div>
              <div>
                <div>
                  <h3>{item.recipename}</h3>
                  <p>{item.user}</p>
                </div>
              </div>
            </div>
          </div>
          )
        })}


      </div>
      {showForm && (
      <Recipeform showForm={showForm} setShowform={setShowform} selectedRecipe={selectedRecipe} fetchData={fetchData} />
      )}
    </div>
  );
};

export default AddRecipe;
