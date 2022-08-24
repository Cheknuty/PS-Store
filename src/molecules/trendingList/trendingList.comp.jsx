import { WideItem } from "../../atoms/wideItem/wideItem.comp";
import { WideList } from "../wideList/wideList.comp";
import { TrendingListWrapper } from "./trendingList.style";


export function TrendingList() {
    return (
        <TrendingListWrapper>
            <WideList text="Trending">
                <WideItem tag="PS4" title="Fall Guys: Ultimate Knockout" cost="$19.99" />
            </WideList>
        </TrendingListWrapper>
    )
}