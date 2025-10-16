import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URL} from "../../config/generalConfig";
import { getAuthToken } from "../../utils/authUtils";


export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async (productId: string, {rejectWithValue, getState}) => {
        try {
            const state = getState() as any;
            const token = getAuthToken(state);
            if (!token) {
                throw new Error("No token found, user is not logged in.");
            }
            const response = await axios.post(
                `${API_URL}/cart`,
                {productId},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data || "Failed to add to cart");
        }
    }
);
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [] as any[],
        loading: false,
        error: null as unknown | null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cartItems = action.payload.items;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as unknown;
            })
    },
});

export default cartSlice.reducer;