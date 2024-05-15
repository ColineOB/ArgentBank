import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as url from '../../api/addressApi'
import axios from "axios";
import { TRANSACTION_CHECKING, TRANSACTION_SAVINGS, TRANSACTION_CARD } from "../../api/mock/mock";

export const postTransactions = createAsyncThunk(
    "transactions/post",
    async (type, thunkApi)  => {
        let url = ''
        try {
            switch (type) {
                case 'checking':
                    url = TRANSACTION_CHECKING;
                    break;
                case 'savings':
                    url = TRANSACTION_SAVINGS;
                    break;
                case 'creditCard':
                    url = TRANSACTION_CARD;
                    break;
                default: console.log('error');
            }
            // const response = await axios.get(url.URL+url.GET_TOTAL_BANK, {}, {headers: {
            //     'Authorization': `Basic ${token}`
            // }})
            const response =  url
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


const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        list: null,
        loading: 'idle',
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(postTransactions.pending, (state) => {
            state.loading = "loading";
        })
        .addCase(postTransactions.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = "loaded";
            state.error = null;
        })
        .addCase(postTransactions.rejected, (state, action) => {
            console.log("postLogin.rejected :", action);
            state.loading = "error";
            state.error = action.payload.status;
        });
    },
});

export default transactionsSlice.reducer;