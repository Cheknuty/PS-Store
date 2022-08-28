import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CostButtonLight } from "../../atoms/costButtonLight/costButtonLight.comp";
import { Container } from "../container/container.comp";
import { AboutSectionInfo, AboutSectionInfoContent, AboutSectionInfoSubtitle, AboutSectionInfoTitle, AboutSectionTextContent, AboutSectionTextContentDesc, AboutSectionTextContentTitle, AboutSectionWrapper } from "./aboutSection.style";


export function AboutSection() {
    const { id } = useParams()
    const allGames = useSelector(state => state.allGamesList.games)
    const game = allGames.find(game => game.id === id);
    return (
        <AboutSectionWrapper>
            <Container>
                <AboutSectionTextContent>
                    <AboutSectionTextContentTitle>{game.title}</AboutSectionTextContentTitle>
                    <AboutSectionTextContentDesc>{game.desc}</AboutSectionTextContentDesc>
                </AboutSectionTextContent>
                <AboutSectionInfoContent>
                    <AboutSectionInfo>
                        <AboutSectionInfoTitle>DEVELOPER</AboutSectionInfoTitle>
                        <AboutSectionInfoSubtitle>{game.company}</AboutSectionInfoSubtitle>
                    </AboutSectionInfo>
                    <AboutSectionInfo>
                        <AboutSectionInfoTitle>publisher</AboutSectionInfoTitle>
                        <AboutSectionInfoSubtitle>{game.company}</AboutSectionInfoSubtitle>
                    </AboutSectionInfo>
                    <AboutSectionInfo>
                        <AboutSectionInfoTitle>release date</AboutSectionInfoTitle>
                        <AboutSectionInfoSubtitle>{game.date}</AboutSectionInfoSubtitle>
                    </AboutSectionInfo>
                    <AboutSectionInfo>
                        <AboutSectionInfoTitle>platform</AboutSectionInfoTitle>
                        <AboutSectionInfoSubtitle>{game.fet}</AboutSectionInfoSubtitle>
                    </AboutSectionInfo>
                    <CostButtonLight after="Add To Cart" before="" />
                </AboutSectionInfoContent>
            </Container>
        </AboutSectionWrapper>
    )
}