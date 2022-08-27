import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "https://fakegame.herokuapp.com/"

export const fetchAllGames = createAsyncThunk(
    'games/fetchAllGames',
    async function(_, {rejectWithValue}) {
        try {
            const res = await fetch(URL + `all`);
            if(!res.ok) {
                throw new Error("Server Error!")
            }
            const data = await res.json()
            return data;

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const exploreSlice = createSlice({
    name: "exploreSlice",
    initialState: {
        games: [],
        status: "idle",
        error: null,
    },
    reducers: {
        
    },

    extraReducers: {
        [fetchAllGames.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchAllGames.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.games = action.payload;
        },
        [fetchAllGames.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})



export default exploreSlice.reducer;