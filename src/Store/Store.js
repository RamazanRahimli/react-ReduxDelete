import { configureStore } from "@reduxjs/toolkit";
import getSlice from './Reducer/getSlice'

 export const store = configureStore ({
    reducer: {
        getSlice:getSlice
    }
})