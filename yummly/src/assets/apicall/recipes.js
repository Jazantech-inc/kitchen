import { instanceAxios } from "./instanceAxios";

// add new recipe
export const AddRecipe = async (payload) => {
    try {
        const response = await instanceAxios.post( "/api/recipes/addRecipe",payload);
        return response.data;
    } catch (error) {
        return error.message;
    }
};

// get all recipes
export const FetchRecipes = async () => {
    try {
      const response = await instanceAxios.get("/api/recipes/fetchRecipes");
        return response.data;
    } catch (error) {
        return error.message;
    }
};



/* update a existing recipe by id*/
export const UpdateRecipe = async (id, payload) => {
    try{
           const response = await instanceAxios.put(`/api/recipes/updateRecipe/${id}`, payload);
           return response.data;   
    } catch(error){
           return error.message
    }
};


/* delete a existing recipe  by id*/
export const DeleteRecipe = async (id) => {
    try{
           const response = await instanceAxios.delete(`/api/recipes/deleteRecipe/${id}`);
           return response.data;   
    } catch(error){
           return error.message;
    }
};

// upload Recipe Image
export const uploadRecipeImage = async (payload)=>{
    try {
        const response = await instanceAxios.post("/api/recipes/uploadImageToRecipe",payload);
        return response.data;
    } catch (error) {
        return error.message
    }
}





