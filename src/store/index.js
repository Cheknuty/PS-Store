import { configureStore } from "@reduxjs/toolkit";
import newReleasesReducer from "../molecules/newReleasesList/newReleasesSlice";
import trendingListReducer from "../molecules/trendingList/trendingListSlice";
import comingSoonSectionReducer from "../molecules/comingSoonSection/comingSoonSectionSlice";
import exploreReducer from "../pages/explore/exploreSlice";
export default configureStore({
    reducer: {
        trendingList: trendingListReducer,
        newReleaseList: newReleasesReducer,
        comingSoonList: comingSoonSectionReducer,
        allGamesList: exploreReducer
    }
}) 