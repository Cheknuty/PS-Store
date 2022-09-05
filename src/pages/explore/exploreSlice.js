import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "https://fakegame.herokuapp.com/"

export const fetchAllGames = createAsyncThunk(
    'games/fetchAllGames',
    async function (_, { rejectWithValue }) {
        try {
            const res = await fetch(URL + `all`);
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

const exploreSlice = createSlice({
    name: "exploreSlice",
    initialState: {
        games: [],
        sortedGames: [],
        genres: [],
        platforms: [],
        features: [],
        status: "idle",
        error: null,
    },
    reducers: {
        allGenres(state) {
            const genres = []
            for (let i = 0; i < state.games.length; i++) {
                if (state.games[i].genre) {
                    for (let j = 0; j < state.games[i].genre.length; j++) {
                        if (!genres.includes(state.games[i].genre[j])) genres.push(state.games[i].genre[j])
                    }
                }
            }

            state.genres = genres
        },

        allFeatures(state) {
            const features = []
            for (let i = 0; i < state.games.length; i++) {
                if (state.games[i].features) {
                    for (let j = 0; j < state.games[i].features.length; j++) {
                        if (!features.includes(state.games[i].features[j])) features.push(state.games[i].features[j])
                    }
                }
            }

            state.features = features
        },

        allPlatforms(state) {
            const platforms = []
            for (let i = 0; i < state.games.length; i++) {
                if (state.games[i].fet) {
                    for (let j = 0; j < state.games[i].fet.length; j++) {
                        if (!platforms.includes(state.games[i].fet[j])) platforms.push(state.games[i].fet[j])
                    }
                }
            }

            state.platforms = platforms
        },

        sort(state, { payload: { fet, genre, features } }) {

                
            let stat = null
            const result = []

            for (let i = 0; i < state.games.length; i++) {
                if(fet.length) {
                    for(let j = 0; j < state.games[i].fet.length; j++) {
                        if(fet.includes(state.games[i].fet[j])){stat = true; break}
                        else stat = false
                    } if(!stat) continue
                } else stat = true


                if(genre.length) {
                    for(let j = 0; j < state.games[i].genre.length; j++) {
                        if(genre.includes(state.games[i].genre[j])) {stat = true; break}
                        else stat = false
                    } if(!stat) continue
                } else stat = true



                if(features.length) {
                    for(let j = 0; j < state.games[i].genre.length; j++) {
                        if(features.includes(state.games[i].features[j])) {stat = true; break}
                        else stat = false
                    } if(!stat) continue
                } else stat = true

                if(stat) {
                    console.log(i, state.games[i].title)
                }
                result.push(state.games[i])
            }

            console.log(result)
            state.sortedGames = result

            
        }
    },

    extraReducers: {
        [fetchAllGames.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchAllGames.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.games = action.payload;
            state.sortedGames = action.payload;
        },
        [fetchAllGames.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})


export const { allGenres, allFeatures, allPlatforms, sort } = exploreSlice.actions
export default exploreSlice.reducer;