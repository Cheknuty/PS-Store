import { useSelector } from "react-redux";
import { TinyItem } from "../../atoms/tinyItem/tinyItem.comp";
import { TinyItemSkeleton } from "../../atoms/tinyItemSkeleton/tinyItemSkeleton.comp";
import { TinyList } from "../tinyList/tinyList.comp";
import { ComingSoonSectionWrapper } from "./comingSoonSection.style";


export function ComingSoonSection() {
    const comingSoonGames = useSelector(state => state.comingSoonList.games)
    const status = useSelector(state => state.comingSoonList.status)
    return (
        <ComingSoonSectionWrapper>
            <TinyList text="Coming Soon">
                {
                    status === "resolved" ?
                        comingSoonGames.map(game => <TinyItem key={game.id} game={game} />) :
                        <>
                            <TinyItemSkeleton />
                            <TinyItemSkeleton />
                            <TinyItemSkeleton />
                            <TinyItemSkeleton />
                            <TinyItemSkeleton />
                            <TinyItemSkeleton />
                        </>
                }
            </TinyList>
        </ComingSoonSectionWrapper>
    )
}