import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { TinyItem } from "../../atoms/tinyItem/tinyItem.comp"
import { TinyItemSkeleton } from "../../atoms/tinyItemSkeleton/tinyItemSkeleton.comp"
import { EpicSection } from "../../molecules/epicEection/epicSection.comp"
import { GameWrapper } from "./game.style"

export function Game() {
    const { id } = useParams()
    const allGames = useSelector(state => state.allGamesList.games)
    const status = useSelector(state => state.allGamesList.status)
    const game = allGames.find(game => game.id === id)
    return (
        <GameWrapper>
            <EpicSection />
        </GameWrapper>
    )
}