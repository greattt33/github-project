import postSlice from "./features/postSlice"
import {configureStore} from "@reduxjs/toolkit"


export default configureStore({
    reducer:{
        data:postSlice,
        title:postSlice
    }
})