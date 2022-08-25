import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "https://fakegame.herokuapp.com/"

export const fetchNewReleaseGames = createAsyncThunk(
    'games/fetchNewReleaseGames',
    async function(_, {rejectWithValue}) {
        try {
            const res = await fetch(URL + `new_releases`);
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

const newReleaseListSlice = createSlice({
    name: "newReleaseList",
    initialState: {
        games: [],
        status: "idle",
        error: null,
    },
    reducers: {
        
    },

    extraReducers: {
        [fetchNewReleaseGames.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchNewReleaseGames.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.games = action.payload; 
        },
        [fetchNewReleaseGames.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})

export default newReleaseListSlice.reducer;