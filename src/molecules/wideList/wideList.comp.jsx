import { TitlePrimary } from "../titlePrimary/titlePrimary.comp";
import { WideListSet, WideListWrapper } from "./wideList.style";


export function WideList({children, text}) {
    return (
        <WideListWrapper>
            <TitlePrimary text={text} />
            <WideListSet>
                {children}
            </WideListSet>
        </WideListWrapper>
    )
}