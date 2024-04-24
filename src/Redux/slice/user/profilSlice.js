import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as url from '../../api/addressApi'
import axios from "axios";

export const postProfil = createAsyncThunk(
    "profil/post",
    async (token, thunkApi)  => {
        try {
            const response = await axios.post(url.URL+url.POST_PROFIL, {}, {headers: {
                'Authorization': `Basic ${token}`
            }})
            return response.data.body;
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

export const putProfil = createAsyncThunk(
    "profil/put",
    async (token, data, thunkApi)  => {
        try {
            const response = await axios.put(url.URL+url.PUT_PROFIL, data, {headers: {
                'Authorization': `Basic ${token}`
            }})
            return response.data.body;
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

const profilSlice = createSlice({
    name: 'profil',
    initialState: {
        profil: null,
        loading: 'idle',
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(postProfil.pending, (state) => {
            state.loading = "loading";
        })
        .addCase(postProfil.fulfilled, (state, action) => {
            state.profil = action.payload;
            state.loading = "loaded";
            state.error = null;
        })
        .addCase(postProfil.rejected, (state, action) => {
            console.log("postLogin.rejected :", action);
            state.loading = "error";
            state.error = action.payload.status;
        });
    },
});

export default profilSlice.reducer;