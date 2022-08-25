import { CostButtonLight } from "../costButtonLight/costButtonLight.comp";
import { TagDark } from "../tagDark/tagDark.comp";
import { TinyItemCompany, TinyItemContent, TinyItemImg, TinyItemTitle, TinyItemWrapper } from "./tinyItem.style";


export function TinyItem({tag, title, before, after, img, company}) {
    return (
        <TinyItemWrapper>
        <TinyItemImg src={img} />
        <TinyItemContent>
            <TinyItemTitle>{title}</TinyItemTitle>
            <TinyItemCompany>{company}</TinyItemCompany>
            <TagDark text={tag} />
            <CostButtonLight before={before} after={after} />
        </TinyItemContent>
    </TinyItemWrapper>
    )
}