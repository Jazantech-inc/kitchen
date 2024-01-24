import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// action
export const fetchMoredata = createAsyncThunk("fetchMoredata", async () => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const num = 10;
    const recipee = await axios
        .get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${num+10}`)
        .then((res) => res.data)
        .catch((error) => {
            console.log(error);
        });
    return recipee;
});

const fetchdata = createSlice({
    name: "fetchdata",
    initialState: {
        data: [],
        isError: false,
        progress:0,
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMoredata.pending, (state, action) => {
            state.progress=40;
        });
        builder.addCase(fetchMoredata.fulfilled, (state, action) => {
            state.progress=100;
            state.data = data.concat(action.payload);
            
        });
        builder.addCase(fetchMoredata.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        });
    },
});

export default fetchdata.reducer;
