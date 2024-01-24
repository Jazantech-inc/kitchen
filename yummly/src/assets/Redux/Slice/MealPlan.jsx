import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const mealplan = createAsyncThunk('mealplan', async(time)=>{
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const mealplans = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}&timeFrame=${time}&targetCalories=2000`)
    .then(res=>res.data).catch(error=>console.log(error))
    return mealplans
})

const mealplanSlice = createSlice({
    name:"mealplanrecipe",
    initialState:{
        data:[],
        isError:false,
        progress:0,
    },
    extraReducers:(builder)=>{
        builder.addCase(mealplan.pending,(state)=>{
            state.progress=40;
        })
        builder.addCase(mealplan.fulfilled,(state,action)=>{
            state.progress=100;
            state.data=action.payload;
        })
        builder.addCase(mealplan.rejected,(state,action)=>{
            console.log("error",action.payload);
            state.isError=true;
        })
    }
})

export default mealplanSlice.reducer;