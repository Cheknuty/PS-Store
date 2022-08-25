import { configureStore } from "@reduxjs/toolkit";
import newReleasesReducer from "../molecules/newReleasesList/newReleasesSlice";
import trendingListReducer from "../molecules/trendingList/trendingListSlice";

export default configureStore({
    reducer: {
        trendingList: trendingListReducer,
        newReleaseList: newReleasesReducer
    }
}) 