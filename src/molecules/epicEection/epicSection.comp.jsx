import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tag } from "../../atoms/tag/tag.comp";
import { Container } from "../container/container.comp";
import { EpicSectionCompany, EpicSectionContent, EpicSectionDate, EpicSectionIcon, EpicSectionImg, EpicSectionInfo, EpicSectionRules, EpicSectionTitle, EpicSectionWrapper } from "./epicSection.style";
import icon from "../../assests/img/ico.jpg"

export function EpicSection() {
    const { id } = useParams()
    const allGames = useSelector(state => state.allGamesList.games)
    const status = useSelector(state => state.allGamesList.status)
    const game = allGames.find(game => game.id === id);
    return (
        <>
            {
                status === "resolved" ?

                    <EpicSectionWrapper>
                        <Container>
                            <EpicSectionImg src={game.epic} />
                            <EpicSectionContent>
                                <EpicSectionTitle>{game.title}</EpicSectionTitle>
                                <EpicSectionInfo>
                                    <Tag text={game.fet} />
                                    <EpicSectionCompany>{game.company} </EpicSectionCompany>
                                    <EpicSectionDate>• {game.date}</EpicSectionDate>
                                </EpicSectionInfo>
                                <EpicSectionRules>
                                    <EpicSectionIcon src={icon} width="35" />
                                    Blood and Gore, Intense Violence, Partial Nudity,
                                    Sexual Themes, Strong Language, Use of Drugs and Alcohol
                                    Users Interact, In-Game Purchases
                                </EpicSectionRules>
                            </EpicSectionContent>
                        </Container>
                    </EpicSectionWrapper> :
                    <p color="red">Loading</p>
            }
        </>
    )
}