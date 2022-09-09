import { Link } from "react-router-dom";
import { MoreItemIcon, MoreItemTitle, MoreItemWrapper } from "./moreItem.style";


export function MoreItem({ img, img2x, text }) {
    return (
        <MoreItemWrapper>
            <Link to={`explore/${text}/def/def`}>
                <MoreItemIcon src={img} srcSet={`${img} 1x, ${img2x} 2x`} width="320" height="128" />
                <MoreItemTitle>{text}</MoreItemTitle>
            </Link>
        </MoreItemWrapper>
    )
}