import { Link } from "react-router-dom";
import { LikeIcon } from "../likeIcon/likeIcon.comp";

export function Like() {
    return (
        <Link to="/favourite"><LikeIcon sizes="normal" /></Link>
    )
}