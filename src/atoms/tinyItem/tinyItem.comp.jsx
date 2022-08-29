import { Link } from "react-router-dom";
import { CostButtonLight } from "../costButtonLight/costButtonLight.comp";
import { TagDark } from "../tagDark/tagDark.comp";
import { TinyItemCompany, TinyItemContent, TinyItemImg, TinyItemTitle, TinyItemWrapper } from "./tinyItem.style";


export function TinyItem({ game: {fet, title, before, after, img, company, id, isbought}}) {
    return (
        <TinyItemWrapper>
        <Link to={`game/${id}`}>
            <TinyItemImg src={img} />
            <TinyItemContent>
                <TinyItemTitle>{title}</TinyItemTitle>
                <TinyItemCompany>{company}</TinyItemCompany>
                <TagDark text={fet} />
                <CostButtonLight id={id} before={before} after={after} isbought={isbought} />
            </TinyItemContent>
        </Link>
    </TinyItemWrapper>
    )
}