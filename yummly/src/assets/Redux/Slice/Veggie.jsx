import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// action
export const veggie = createAsyncThunk("veggie", async () => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const recip = await axios
        .get(
            `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&tags=vegetarian,dessert`
        )
        .then((res) => res.data)
        .catch((error) => {
            console.log(error);
        });
    return recip;
});

const veggieSlice = createSlice({
    name: "veggieRecipe",
    initialState: {
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(veggie.pending, (state, action) => {
        });
        builder.addCase(veggie.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(veggie.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        });
    },
});

export default veggieSlice.reducer;
