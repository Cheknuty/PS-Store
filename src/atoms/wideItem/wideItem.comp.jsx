import { Tag } from "../tag/tag.comp";
import { WideItemButton, WideItemContent, WideItemCost, WideItemTitle, WideItemWrapper } from "./wideItem.style";


export function WideItem({tag, title, cost}) {
    return (
        <WideItemWrapper>
            <Tag text={tag}/>
            <WideItemTitle>{title}</WideItemTitle>
            <WideItemContent>
                <WideItemCost>{cost}</WideItemCost>
                <WideItemButton>Add To Cart</WideItemButton>
            </WideItemContent>
        </WideItemWrapper>
    )
}