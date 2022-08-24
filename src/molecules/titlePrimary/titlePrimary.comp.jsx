import { ButtonAll } from "../../atoms/buttonAll/buttonAll.comp";
import { TitlePrimarHeading, TitlePrimaryWrapper } from "./titlePrimary.style";


export function TitlePrimary({text}) {
    return (
        <TitlePrimaryWrapper>
            <TitlePrimarHeading>{text}</TitlePrimarHeading>
            <ButtonAll />
        </TitlePrimaryWrapper>
    )
}