import { LogoIcon } from "./logo.style";
import PS from "../../assests/img/logo.png"
import PS2x from "../../assests/img/logo@2x.png"
export function Logo() {
    return (
        <LogoIcon src={PS} srcSet={`${PS} 1x, ${PS2x} 2x`} width="200" height="43" alt="Play Station Store" />
    )
}