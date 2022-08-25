import { CostButtonLightAfter, CostButtonLightBefore, CostButtonLightWrapper } from "./costButton.style";


export function CostButtonLight({ before, after }) {
    return (
        <CostButtonLightWrapper>
            {
                (before !== "") ?
                    <>
                        <CostButtonLightBefore>{before}</CostButtonLightBefore>
                        <CostButtonLightAfter>{after}</CostButtonLightAfter>
                    </>:
                    <CostButtonLightAfter>{after}</CostButtonLightAfter>
            }
        </CostButtonLightWrapper>
    )
}