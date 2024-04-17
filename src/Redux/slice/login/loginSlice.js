import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as url from '../../api/addressApi'

export const postLogin = createAsyncThunk(
    "login/post",
    async ({data})  => {
        try {
            // const response = await fetch(url.URL+url.POST_LOGIN, {
            //     method: 'POST',
            //     body: JSON.stringify(data)
            // })
            // return response.json()
            return console.log(data, 'slice');
        } catch(error) {
            console.log('error :', error);
        }
    }
)

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        token: null,
        loading: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(postLogin.pending, (state) => {
            state.loading = "loading";
        })
        .addCase(postLogin.fulfilled, (state, action) => {
            state.token = action.payload;
            state.loading = "loaded";
            state.error = null;
        })
        .addCase(postLogin.rejected, (state, action) => {
            state.loading = "error";
            state.error = action.error.message;
        });
    },
});

export default loginSlice.reducer;