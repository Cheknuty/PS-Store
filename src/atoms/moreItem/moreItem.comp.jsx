import { MoreItemIcon, MoreItemTitle, MoreItemWrapper } from "./moreItem.style";


export function MoreItem({img, img2x, text}) {
    return (
        <MoreItemWrapper>
            <MoreItemIcon src={img} srcSet={`${img} 1x, ${img2x} 2x`} width="320" height="128" />
            <MoreItemTitle>{text}</MoreItemTitle>
        </MoreItemWrapper>
    )
}