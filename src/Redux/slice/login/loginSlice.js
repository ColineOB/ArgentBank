import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as url from '../../api/addressApi'
import axios from "axios";

export const postLogin = createAsyncThunk(
    "login/post",
    async (data, thunkApi)  => {
        try {
            const response = await axios.post(url.URL+url.POST_LOGIN, data)
            // console.log(response);
            return response.data.body.token;
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

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        token: null,
        loading: 'idle',
        error: null,
    },
    reducers: {
        logout: state => {

        }
    },
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
            console.log("postLogin.rejected :", action);
            state.loading = "error";
            state.error = action.payload.status;
        });
    },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;