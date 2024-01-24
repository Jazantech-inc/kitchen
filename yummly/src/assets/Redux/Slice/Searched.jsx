import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSearch = createAsyncThunk("getSearched", async (name) => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const searches = await axios
        .get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}&addRecipeInformation=true&addRecipeNutrition=true`
        )
        .then((res) => res.data)
        .catch((error) => console.log(error));
    return searches;
});

const searchSlice = createSlice({
    name: "searchRecipe",
    initialState: {
        data: [],
        isError: false,
        progress: 0,
    },
    extraReducers: (builder) => {
        builder.addCase(getSearch.pending, (state, action) => {
            state.progress = 40;
        });
        builder.addCase(getSearch.fulfilled, (state, action) => {
            state.progress = 100;
            state.data = action.payload;
        });
        builder.addCase(getSearch.rejected, (state, action) => {
            console.log("error", action.payload);
            state.isError = true;
        });
    },
});

export default searchSlice.reducer;
