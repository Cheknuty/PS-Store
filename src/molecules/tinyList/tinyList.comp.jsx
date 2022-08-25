import { TitlePrimary } from "../titlePrimary/titlePrimary.comp";
import { TinyListSet, TinyListWrapper } from "./tinyList.style";


export function TinyList({text, children}) {
    return (
        <TinyListWrapper>
            <TitlePrimary text={text} />
            <TinyListSet>{children}</TinyListSet>
        </TinyListWrapper>
    )
}