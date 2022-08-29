import { useSelector } from "react-redux";
import { WideItem } from "../../atoms/wideItem/wideItem.comp";
import { WideItemSkeleton } from "../../atoms/wideItemSkeleton/wideItemSkeleton.comp";
import { WideList } from "../wideList/wideList.comp";
import { TrendingListWrapper } from "./trendingList.style";


export function TrendingList() {
    const trendingGames = useSelector(state => state.trendingList.games)
    const status = useSelector(state => state.trendingList.status)
    return (
        <TrendingListWrapper>
            <WideList text="Trending">
                {
                    status === "resolved" ?
                    trendingGames.map(game => <WideItem key={game.id} game={game} />) :
                <><WideItemSkeleton />
                <WideItemSkeleton />
                <WideItemSkeleton /></>
                }
            </WideList>
        </TrendingListWrapper>
    )
}