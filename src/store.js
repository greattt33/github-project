import dataReducer from "./features/postSlice"
import titleReducer from "./features/postSlice"

import {configureStore} from "@reduxjs/toolkit"


export default configureStore({
    reducer:{
        data:dataReducer,
        title:titleReducer
    }
})