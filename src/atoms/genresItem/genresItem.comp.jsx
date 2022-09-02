import { GenresItemIcon, GenresItemWrapper } from "./genresItem.style";


export function GenresItem({img, img2x}) {
    return (
        <GenresItemWrapper>
            <GenresItemIcon src={img} srcSet={`${img} 1x, ${img2x} 2x`} width="170" height="170" />
        </GenresItemWrapper>
    )
}