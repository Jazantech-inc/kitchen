import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getinformation = createAsyncThunk('getinformation', async(id)=>{
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const information = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
    .then(res=>res.data).catch(error=>console.log(error))
    return information
})

const informationSlice = createSlice({
    name:"informationRecipe",
    initialState:{
        data:[],
        isError:false,
        progress:0
    },
    extraReducers:(builder)=>{
        builder.addCase(getinformation.pending,(state,action)=>{
            state.progress=40;
        })
        builder.addCase(getinformation.fulfilled,(state,action)=>{
            state.progress=100;
            state.data=action.payload;
        })
        builder.addCase(getinformation.rejected,(state,action)=>{
            console.log("error",action.payload);
            state.isError=true;
        })
    }
})

export default informationSlice.reducer;