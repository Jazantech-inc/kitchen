import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const cuisine = createAsyncThunk('cuisine', async(name)=>{
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const cuisines = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}&addRecipeInformation=true&addRecipeNutrition=true`)
    .then(res=>res.data).catch(error=>console.log(error))
    return cuisines
})

const cuisineSlice = createSlice({
    name:"cuisineRecipe",
    initialState:{
        data:[],
        isError:false,
        progress:0
    },
    extraReducers:(builder)=>{
        builder.addCase(cuisine.pending,(state,action)=>{
            state.progress=40;
        })
        builder.addCase(cuisine.fulfilled,(state,action)=>{
            state.progress=100;
            state.data=action.payload;
        })
        builder.addCase(cuisine.rejected,(state,action)=>{
            console.log("error",action.payload);
            state.isError=true;
        })
    }
})

export default cuisineSlice.reducer;
