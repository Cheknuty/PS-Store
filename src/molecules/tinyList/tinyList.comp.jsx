import { ListPrimary } from "../../atoms/listPrimary/listPrimary.comp";
import { TitlePrimary } from "../titlePrimary/titlePrimary.comp";
import { TinyListWrapper } from "./tinyList.style";


export function TinyList({text, children}) {
    return (
        <TinyListWrapper>
            <TitlePrimary text={text} />
            <ListPrimary>
                {children}
            </ListPrimary>
        </TinyListWrapper>
    )
}