import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ComingSoonSection } from "../../molecules/comingSoonSection/comingSoonSection.comp";
import { HeroSection } from "../../molecules/heroSection/heroSection.comp";
import { NavBar } from "../../molecules/navBar/navBar.comp";
import { HomeWrapper } from "./home.style";
import { fetchNewReleaseGames } from "../../molecules/newReleasesList/newReleasesSlice";
import { fetchTredingGames } from "../../molecules/trendingList/trendingListSlice";
import { fetchComingSoonGames } from "../../molecules/comingSoonSection/comingSoonSectionSlice"
import { fetchAllGames } from "../explore/exploreSlice"; 
import { PSNowSection } from "../../molecules/PSNowSection/PSNowSection.comp";
export function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTredingGames())
        dispatch(fetchNewReleaseGames())
        dispatch(fetchComingSoonGames())
        dispatch(fetchAllGames())
        // eslint-disable-next-line
      },[])
    return (
        <HomeWrapper>
            <NavBar />
            <HeroSection />
            <PSNowSection />
            <ComingSoonSection />
        </HomeWrapper>
    )
}