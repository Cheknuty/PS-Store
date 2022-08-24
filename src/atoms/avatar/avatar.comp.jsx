import { AvatarIcon } from "./avatar.style";
import ava from "../../assests/img/avatar.png"
import ava2x from "../../assests/img/avatar@2x.png"

export function Avatar() {
    return (
        <AvatarIcon src={ava} srcSet={`${ava} 1x, ${ava2x} 2x`} width="40" height="40" alt="avatar" />
    )
}