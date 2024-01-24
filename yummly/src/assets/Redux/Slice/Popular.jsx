import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// action
export const fetchPopular = createAsyncThunk("fetchPopular", async () => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const num = 10;
    const recip = await axios
        .get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${num}`)
        .then((res) => res.data)
        .catch((error) => {
            console.log(error);
        });
    return recip;
});

const popularSlice = createSlice({
    name: "popularRecipe",
    initialState: {
        data: [],
        isError: false,
        progress:0,
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPopular.pending, (state, action) => {
            state.progress=40;
        });
        builder.addCase(fetchPopular.fulfilled, (state, action) => {
            state.progress=100;
            state.data = action.payload;
        });
        builder.addCase(fetchPopular.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        });
    },
});

export default popularSlice.reducer;
