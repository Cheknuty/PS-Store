import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import URL from "../../var/URL";


export const fetchComingSoonGames = createAsyncThunk(
    'games/fetchComingSoonGames',
    async function(_, {rejectWithValue}) {
        try {
            const res = await fetch(URL + `all?category=coming_soon`);
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

const comingSoonListSlice = createSlice({
    name: "newReleaseList",
    initialState: {
        games: [],
        status: "idle",
        error: null,
    },
    reducers: {
        
    },

    extraReducers: {
        [fetchComingSoonGames.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchComingSoonGames.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.games = action.payload; 
        },
        [fetchComingSoonGames.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})

export default comingSoonListSlice.reducer;