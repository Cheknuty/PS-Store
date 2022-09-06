import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import URL from "../../var/URL";


export const fetchSalesDealsGames = createAsyncThunk(
    'games/fetchSalesDealsGames',
    async function(_, {rejectWithValue}) {
        try {
            const res = await fetch(URL + `all?category=sale_deals`);
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

const salesDealsListSlice = createSlice({
    name: "salesDealsList",
    initialState: {
        games: [],
        status: "idle",
        error: null,
    },
    reducers: {
        
    },

    extraReducers: {
        [fetchSalesDealsGames.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchSalesDealsGames.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.games = action.payload; 
        },
        [fetchSalesDealsGames.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})

export default salesDealsListSlice.reducer;