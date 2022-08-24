import { Tag } from "../../atoms/tag/tag.comp";
import { Container } from "../container/container.comp";
import { HeroSectionHeader, HeroSectionHeaderImg, HeroSectionHeaderText, HeroSectionWrapper } from "./heroSection.style";
import heroLogo from "../../assests/img/heroLogo.png"
import { CostButtonBig } from "../../atoms/costButtonBig/costButtonBig.comp";
import { TrendingList } from "../trendingList/trendingList.comp";

export function HeroSection() {
    return (
        <HeroSectionWrapper>
            <Container>
                <HeroSectionHeader>
                    <HeroSectionHeaderImg src={heroLogo} width="311" height="153" alt="Splider-Man Miles Morales" />
                    <HeroSectionHeaderText>
                        <Tag text="PS5" />
                        <CostButtonBig text="$49.99" />
                    </HeroSectionHeaderText>
                </HeroSectionHeader>
                <TrendingList />
            </Container>
        </HeroSectionWrapper>
    )
}