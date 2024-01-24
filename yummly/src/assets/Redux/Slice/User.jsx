import { createSlice } from "@reduxjs/toolkit";

export const User=createSlice({
    name:'user',
    initialState:{
        user:null,
    },
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload;
        }
    }
})

export const {setUser}=User.actions