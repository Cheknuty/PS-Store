import { Link } from "react-router-dom";
import { GenresItemIcon, GenresItemWrapper } from "./genresItem.style";


export function GenresItem({ img, img2x, itm }) {
    return (
        <GenresItemWrapper>
            <Link to={`explore/def/${itm.text}/def`}>
                <GenresItemIcon src={img} srcSet={`${img} 1x, ${img2x} 2x`} width="170" height="170" />
            </Link>
        </GenresItemWrapper>
    )
}