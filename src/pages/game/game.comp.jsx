import { useDispatch, useSelector } from "react-redux"
import { AboutSection } from "../../molecules/aboutSection/aboutSection.comp"
import { EpicSection } from "../../molecules/epicEection/epicSection.comp"
import { GameSkeleton } from "../../molecules/gameSkeleton/gameSkeleton.comp"
import { Slider } from "../../molecules/slider/slider.comp"
import { GameWrapper } from "./game.style"
import { fetchAllGames } from "../../pages/explore/exploreSlice"
import { useEffect } from "react"
export function Game() {
    const status = useSelector(state => state.allGamesList.status)
    const dispatch = useDispatch()
    

    useEffect(() => {
      dispatch(fetchAllGames())
      // eslint-disable-next-line
    }, [])
    
    return (
        <GameWrapper>
            {
                status === "resolved" ?
                    <>
                        <EpicSection />
                        <Slider />
                        <AboutSection />
                    </> : <GameSkeleton />
            }
        </GameWrapper>
    )
}