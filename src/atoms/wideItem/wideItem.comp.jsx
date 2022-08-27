import { Link } from "react-router-dom";
import { Tag } from "../tag/tag.comp";
import { WideItemButton, WideItemContent, WideItemCost, WideItemImg, WideItemText, WideItemTitle, WideItemWrapper } from "./wideItem.style";


export function WideItem({tag, title, img, after, id}) {
    return (
        <WideItemWrapper>
            <Link to={`game/${id}`}>
                <WideItemImg src={img} />
                <WideItemText>
                    <Tag text={tag}/>
                    <WideItemTitle>{title}</WideItemTitle>
                    <WideItemContent>
                        <WideItemCost>{after}</WideItemCost>
                        <WideItemButton>Add To Cart</WideItemButton>
                    </WideItemContent>
                </WideItemText>
            </Link>
        </WideItemWrapper>
    )
}