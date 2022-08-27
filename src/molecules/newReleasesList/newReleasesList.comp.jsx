import { useSelector } from "react-redux";
import { TinyItem } from "../../atoms/tinyItem/tinyItem.comp";
import { TinyItemSkeleton } from "../../atoms/tinyItemSkeleton/tinyItemSkeleton.comp";
import { TinyList } from "../tinyList/tinyList.comp";
import { NewReleasesListWrapper } from "./newReleasesList.style";


export function NewReleasesList() {
    const newReleaseGames = useSelector(state => state.newReleaseList.games)
    const status = useSelector(state => state.newReleaseList.status)
    return (
        <NewReleasesListWrapper>
            <TinyList text="New Releases">
                {
                    status === "resolved" ?
                    newReleaseGames.map(game => <TinyItem id={game.id} key={game.id} before={game.before} after={game.after} title={game.title} img={game.img} company={game.company} tag={game.fet} />) :
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
        </NewReleasesListWrapper>
    )
}