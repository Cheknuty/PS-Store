import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "https://fakegame.herokuapp.com/"

export const fetchTredingGames = createAsyncThunk(
    'auth/fetchToken',
    async function(_, {rejectWithValue}) {
        try {
            const res = await fetch(URL + `trending`);
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

const trendingListSlice = createSlice({
    name: "trendingList",
    initialState: {
        games: [],
        status: "idle",
        error: null,
    },
    reducers: {
        
    },

    extraReducers: {
        [fetchTredingGames.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchTredingGames.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.games = action.payload; 
        },
        [fetchTredingGames.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})

export default trendingListSlice.reducer;