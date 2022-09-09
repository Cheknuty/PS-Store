import { TitlePrimary } from "../titlePrimary/titlePrimary.comp";
import { SalesDealsSectionItem, SalesDealsSectionItemContent, SalesDealsSectionItemDesc, SalesDealsSectionItemIcon, SalesDealsSectionList, SalesDealsSectionWrapper } from "./salesDealsSection.style";
import card1Logo from "../../assests/img/card1Logo.svg"
import card3Logo from "../../assests/img/card3Logo.svg"
import { ListPrimary } from "../../atoms/listPrimary/listPrimary.comp";
import { useSelector } from "react-redux";
import { TinyItem } from "../../atoms/tinyItem/tinyItem.comp";
import { TinyItemSkeleton } from "../../atoms/tinyItemSkeleton/tinyItemSkeleton.comp";
export function SalesDealsSection() {
    const games = useSelector(state => state.salesDealsList.games)
    const status = useSelector(state => state.salesDealsList.status)

    return (
        <SalesDealsSectionWrapper>
            <TitlePrimary text="Sales & Deals" />
            <SalesDealsSectionList>

                <SalesDealsSectionItem>
                    <SalesDealsSectionItemContent>
                        <SalesDealsSectionItemIcon src={card1Logo} />
                        <SalesDealsSectionItemDesc>PLAYSTATION STUDIOS SUPER SALE</SalesDealsSectionItemDesc>
                    </SalesDealsSectionItemContent>
                </SalesDealsSectionItem>

                <SalesDealsSectionItem>
                    <SalesDealsSectionItemContent>
                        <SalesDealsSectionItemDesc>GAMES UNDER</SalesDealsSectionItemDesc>
                        <SalesDealsSectionItemDesc>$20</SalesDealsSectionItemDesc>
                        <SalesDealsSectionItemDesc>ENDS 12/02</SalesDealsSectionItemDesc>
                    </SalesDealsSectionItemContent>
                </SalesDealsSectionItem>

                <SalesDealsSectionItem>
                    <SalesDealsSectionItemContent>
                        <SalesDealsSectionItemIcon src={card3Logo} />
                        <SalesDealsSectionItemDesc>UP TO 40%</SalesDealsSectionItemDesc>
                    </SalesDealsSectionItemContent>
                </SalesDealsSectionItem>

            </SalesDealsSectionList>
            <ListPrimary>
                {
                    status === "resolved" ?
                    games.map(game => <TinyItem key={game.id} game={game} />) :
                    <>
                        <TinyItemSkeleton />
                        <TinyItemSkeleton />
                        <TinyItemSkeleton />
                        <TinyItemSkeleton />
                        <TinyItemSkeleton />
                        <TinyItemSkeleton />
                    </>
                }
            </ListPrimary>
        </SalesDealsSectionWrapper>
    )
}