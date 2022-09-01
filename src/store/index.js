import { configureStore } from "@reduxjs/toolkit";
import newReleasesReducer from "../molecules/newReleasesList/newReleasesSlice";
import trendingListReducer from "../molecules/trendingList/trendingListSlice";
import comingSoonSectionReducer from "../molecules/comingSoonSection/comingSoonSectionSlice";
import exploreReducer from "../pages/explore/exploreSlice";
import cartReducer from "../pages/cartPage/cartSlice";
import favouriteReducer from "../pages/favouritePage/favouriteSlice";
import salesDealsReducer from "../molecules/salesDealsSection/salesDealsSlice";
import freeToPlayReducer from "../molecules/freeToPlaySection/freeToPlaySlice";
export default configureStore({
    reducer: {
        trendingList: trendingListReducer,
        newReleaseList: newReleasesReducer,
        comingSoonList: comingSoonSectionReducer,
        allGamesList: exploreReducer,
        purchasedGamesList: cartReducer,
        likedGamesList: favouriteReducer,
        salesDealsList: salesDealsReducer,
        freeToPlayList: freeToPlayReducer
    }
}) 