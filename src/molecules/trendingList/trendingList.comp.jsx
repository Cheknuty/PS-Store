import { useSelector } from "react-redux";
import { WideItem } from "../../atoms/wideItem/wideItem.comp";
import { WideList } from "../wideList/wideList.comp";
import { TrendingListWrapper } from "./trendingList.style";


export function TrendingList() {
    const trendingGames = useSelector(state => state.trendingList.games)
    const status = useSelector(state => state.trendingList.status)
    return (
        <TrendingListWrapper>
            <WideList text="Trending">
                {
                    status === "resolved" && 
                    trendingGames.map(game => <WideItem key={game.id} tag={game.fet} title={game.title} after={game.after} img={game.img} />) 
                }
                
            </WideList>
        </TrendingListWrapper>
    )
}