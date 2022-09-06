import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import URL from "../../var/URL";


export const fetchLikedGames = createAsyncThunk(
    'games/fetchLikedGames',
    async function (_, { rejectWithValue }) {
        try {
            const res = await fetch(URL + `all?isFav=true`);
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

export const addLikedGames = createAsyncThunk(
    'games/addLikedGames',
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
                    "isbought": obj.isbought,
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

const favouriteSlice = createSlice({
    name: "favouriteList",
    initialState: {
        games: [],
        status: "idle",
        error: null,
    },
    reducers: {

    },

    extraReducers: {
        [fetchLikedGames.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchLikedGames.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.games = action.payload;
        },
        [fetchLikedGames.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})

export default favouriteSlice.reducer;