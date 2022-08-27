import { BtnLearnMoreWrapperDark, BtnLearnMoreWrapperYellow } from "./btnLearnMore.style";


export function BtnLearnMore({ color }) {
    return (
        <>
            {
                color === "dark" ?
                    <BtnLearnMoreWrapperDark>Learn More</BtnLearnMoreWrapperDark> :
                    <BtnLearnMoreWrapperYellow>Learn More</BtnLearnMoreWrapperYellow>
            }
        </>
    )
}