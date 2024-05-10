import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSliceThunk = createAsyncThunk('api,data', async () => {
    try {
        const res = await axios.get('https://dummyjson.com/products');
        console.log('tank', res.data.products);
        return res.data.products;
    } catch (error) {
        throw error;
    }
});

const initialState = {
    loading: false,
    products: [],
    error: null
};

export const deleteSliceThunk =createAsyncThunk('api/delete', async(id) => {
    await axios.delete(`https://northwind.vercel.app/api/categories/${id}`)
})

export const getSlice = createSlice({
    name: 'getSlice',
    initialState: initialState,
    reducers: {
        deletePostt:(state, action) => {
            const updatedData = state.products.filter(item => item.id != action.payload)
            state.products = updatedData
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSliceThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getSliceThunk.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getSliceThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // action.error.message içinde hatanın açıklaması olacak
            })
            .addCase(deleteSliceThunk.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(deleteSliceThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteSliceThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            
    }
});

export const {addPost, deletePostt} = getSlice.actions
export default getSlice.reducer;
