import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import URL from "../../var/URL";



export const fetchFreeToPlayGames = createAsyncThunk(
    'games/fetchFreeToPlayGames',
    async function(_, {rejectWithValue}) {
        try {
            const res = await fetch(URL + `all?category=free_to_play`);
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

const freeToPlayListSlice = createSlice({
    name: "freeToPlayList",
    initialState: {
        games: [],
        status: "idle",
        error: null,
    },
    reducers: {
        
    },

    extraReducers: {
        [fetchFreeToPlayGames.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchFreeToPlayGames.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.games = action.payload; 
        },
        [fetchFreeToPlayGames.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})

export default freeToPlayListSlice.reducer;