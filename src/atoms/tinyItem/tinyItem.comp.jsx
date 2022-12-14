import { Link } from "react-router-dom";
import { CostButtonLight } from "../costButtonLight/costButtonLight.comp";
import { TagDark } from "../tagDark/tagDark.comp";
import { TinyItemCompany, TinyItemContent, TinyItemImg, TinyItemTagList, TinyItemTitle, TinyItemWrapper } from "./tinyItem.style";
import { LikeIcon } from "../likeIcon/likeIcon.comp";

export function TinyItem({ game: {fet, title, before, after, img, company, id, isbought, isFav}}) {
    return (
        <TinyItemWrapper>
        <Link to={`../game/${id}`}>
            <TinyItemImg src={img} />
            <TinyItemContent>
                <TinyItemTitle>{title}</TinyItemTitle>
                <TinyItemCompany>{company}</TinyItemCompany>
                <TinyItemTagList>
                    {
                        fet.map(txt => <TagDark text={txt} key={id} />)
                    }

                </TinyItemTagList>
                <LikeIcon size="big" id={id} isFav={isFav} />
                <CostButtonLight id={id} before={before} after={after} isbought={isbought} />
            </TinyItemContent>
        </Link>
    </TinyItemWrapper>
    )
}