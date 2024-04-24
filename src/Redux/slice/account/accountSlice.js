import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as url from '../../api/addressApi'
import axios from "axios";
import { TOTAL_ARGENT_BANK } from "../../api/mock/mock";

export const postAccount = createAsyncThunk(
    "account/post",
    async (token, thunkApi)  => {
        try {
            // const response = await axios.get(url.URL+url.GET_TOTAL_BANK, {}, {headers: {
            //     'Authorization': `Basic ${token}`
            // }})
            const response =  TOTAL_ARGENT_BANK
            return response;
        } catch (error) {
            console.log("catch :", error.response);
            if (error.response.status === 400 || error.response.status === 500) {
                console.log("createAsyncThunk :", error.response);
                return thunkApi.rejectWithValue(error.response.data)
            }
            throw error
        }
            
    }
)


const accountSlice = createSlice({
    name: 'account',
    initialState: {
        total: null,
        loading: 'idle',
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(postAccount.pending, (state) => {
            state.loading = "loading";
        })
        .addCase(postAccount.fulfilled, (state, action) => {
            state.total = action.payload;
            state.loading = "loaded";
            state.error = null;
        })
        .addCase(postAccount.rejected, (state, action) => {
            console.log("postLogin.rejected :", action);
            state.loading = "error";
            state.error = action.payload.status;
        });
    },
});

export default accountSlice.reducer;