import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const getPost=createAsyncThunk("data/getPost",async ()=>{
    return fetch("https://api.github.com/users/greattt33")
      .then(response=>response.json())})


 export const getRepo=createAsyncThunk("title/getRepo",async ()=>{
        return fetch("https://api.github.com/users/greattt33/repos")
          .then(response=>response.json())})    

const postSlice=createSlice({
    name:["data","title"],
    initialState:{
        data:[],
        title:[],
        loading:false
    },
    extraReducer:{
        [getPost.loading]:(state,action)=>{
            state.loading=true
        },
        [getRepo.loading]:(state,action)=>{
            state.loading=true
        },
        [getPost.fulfilled]:(state,action)=>{
            state.loading=false,
            state.data=action.payload
        },
        [getRepo.fulfilled]:(state,action)=>{
            state.loading=false,
            state.title=action.payload
        },
        [getPost.rejected]:(state,action)=>{
            state.loading=false
        },
        [getRepo.rejected]:(state,action)=>{
            state.loading=false
        }
    }
})     

export default postSlice