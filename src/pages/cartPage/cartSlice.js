import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import URL from "../../var/URL";


export const fetchPurchasedGames = createAsyncThunk(
    'games/fetchPurchasedGames',
    async function (_, { rejectWithValue }) {
        try {
            const res = await fetch(URL + `all?isbought=true`);
            if (!res.ok) {
                throw new Error("Server Error!")
            }
            const data = await res.json()
            return data;

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addPurchasedGames = createAsyncThunk(
    'games/addPurchasedGames',
    async function (obj, { rejectWithValue }) {
        try {
            const res = await fetch(URL + `all/${obj.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": obj.id,
                    "title": obj.title,
                    "after": obj.after,
                    "before": obj.before,
                    "img": obj.img,
                    "fet": obj.fet,
                    "company": obj.company,
                    "date": obj.date,
                    "desc": obj.desc,
                    "gallery": obj.gallery,
                    "isFav": obj.isFav,
                    "isbought": true,
                    "category": obj.category,
                    "epic": obj.epic
                  })
            });
            if (!res.ok) {
                throw new Error("Server Error!")
            }
            const data = await res.json()
            return data;

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const cartSlice = createSlice({
    name: "purchasedList",
    initialState: {
        games: [],
        status: "idle",
        error: null,
    },
    reducers: {

    },

    extraReducers: {
        [fetchPurchasedGames.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchPurchasedGames.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.games = action.payload;
        },
        [fetchPurchasedGames.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})

export default cartSlice.reducer;