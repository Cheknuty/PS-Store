import { BtnLearnMore } from "../../atoms/btnLearnMore/btnLearnMore.comp";
import { Container } from "../container/container.comp";
import { PSNowSectionContent, PSNowSectionDesc, PSNowSectionImg, PSNowSectionWrapper } from "./PSNowSection.style";
import game from "../../assests/img/game.png"
import game2x from "../../assests/img/game@2x.png"

export function PSNowSection() {
    return (
        <PSNowSectionWrapper>
            <Container>

                <PSNowSectionContent>
                    <PSNowSectionDesc>
                        Hundreds of incredible games on demand,what will play first?
                    </PSNowSectionDesc>
                    <BtnLearnMore color="dark" />
                </PSNowSectionContent>

                <PSNowSectionImg src={game} srcSet={`${game} 1x, ${game2x} 2x`} />

            </Container>
        </PSNowSectionWrapper>
    )
}