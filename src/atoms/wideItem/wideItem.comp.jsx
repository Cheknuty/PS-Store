import { Tag } from "../tag/tag.comp";
import { WideItemButton, WideItemContent, WideItemCost, WideItemImg, WideItemText, WideItemTitle, WideItemWrapper } from "./wideItem.style";


export function WideItem({tag, title, img, after}) {
    return (
        <WideItemWrapper>
            <WideItemImg src={img} />
            <WideItemText>
                <Tag text={tag}/>
                <WideItemTitle>{title}</WideItemTitle>
                <WideItemContent>
                    <WideItemCost>{after}</WideItemCost>
                    <WideItemButton>Add To Cart</WideItemButton>
                </WideItemContent>
            </WideItemText>
        </WideItemWrapper>
    )
}