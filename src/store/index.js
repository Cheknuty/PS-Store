import { configureStore } from "@reduxjs/toolkit";
import trendingListReducer from "../molecules/trendingList/trendingListSlice";

export default configureStore({
    reducer: {
        trendingList: trendingListReducer
    }
}) 