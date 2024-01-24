import { configureStore } from "@reduxjs/toolkit";
import popularReducer from "./Slice/Popular";
import cuisineReducer from "./Slice/Cuisine";
import searchReducer from "./Slice/Searched";
import informationReducer from "./Slice/Recipe";
import veggieReducer from "./Slice/Veggie";
import fetchmoreReducer from "./Slice/FetchMore";
import  {loadersSlice}  from "./Slice/Loader";
import {User} from "./Slice/User"
import mealplanReducer from "./Slice/MealPlan";

export const store = configureStore({
  reducer: {
    popular: popularReducer,
    cuisine: cuisineReducer,
    searching: searchReducer,
    inform: informationReducer,
    veggie: veggieReducer,
    fetchmore: fetchmoreReducer,
    loaders: loadersSlice.reducer,
    plan:mealplanReducer,
    users:User.reducer
  },
});
