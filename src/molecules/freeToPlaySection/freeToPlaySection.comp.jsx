import { useSelector } from "react-redux";
import { TinyItem } from "../../atoms/tinyItem/tinyItem.comp";
import { TinyItemSkeleton } from "../../atoms/tinyItemSkeleton/tinyItemSkeleton.comp";
import { TinyList } from "../tinyList/tinyList.comp";
import { FreeToPlaySectionWrapper } from "./freeToPlaySection.style";


export function FreeToPlaySection() {
    const games = useSelector(state => state.freeToPlayList.games)
    const status = useSelector(state => state.freeToPlayList.status)

    return (
        <FreeToPlaySectionWrapper>
            <TinyList text="Free To Play">
                {
                    status === "resolved" ?
                    games.map(game => <TinyItem key={game.id} game={game} />) :
                    <TinyItemSkeleton />
                }
            </TinyList>
        </FreeToPlaySectionWrapper>
    )
}