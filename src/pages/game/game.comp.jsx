import { useSelector } from "react-redux"
import { AboutSection } from "../../molecules/aboutSection/aboutSection.comp"
import { EpicSection } from "../../molecules/epicEection/epicSection.comp"
import { GameSkeleton } from "../../molecules/gameSkeleton/gameSkeleton.comp"
import { Slider } from "../../molecules/slider/slider.comp"
import { GameWrapper } from "./game.style"

export function Game() {
    const status = useSelector(state => state.allGamesList.status)
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