import { PSPlusSectionContent, PSPlusSectionDesc, PSPlusSectionIcon, PSPlusSectionImg, PSPlusSectionWrapper } from "./PSPlusSection.style";
import plusLogo from "../../assests/img/plusLogo.png"
import plusLogo2x from "../../assests/img/plusLogo@2x.png"
import plus from "../../assests/img/plus.png"
import plus2x from "../../assests/img/plus@2x.png"
import { Container } from "../container/container.comp";
import { BtnLearnMore } from "../../atoms/btnLearnMore/btnLearnMore.comp";

export function PSPlusSection() {
    return (
        <PSPlusSectionWrapper>
            <PSPlusSectionIcon src={plusLogo} srcSet={`${plusLogo} 1x, ${plusLogo2x} 2x`} />
            <Container>
                <PSPlusSectionContent>
                    <PSPlusSectionImg src={plus} srcSet={`${plus} 1x, ${plus2x} 2x`} />
                    <PSPlusSectionDesc>
                        Enhance your PlayStation experience with access to online multiplayer, monthly games, exclusive discounts and more.
                    </PSPlusSectionDesc>
                    <BtnLearnMore color="yellow" />
                </PSPlusSectionContent>
            </Container>
        </PSPlusSectionWrapper>
    )
}