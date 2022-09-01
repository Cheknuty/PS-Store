import { CollectionsList } from "../../atoms/collectionsList/collectionsList.comp";
import { GenresList } from "../../atoms/genresList/genresList.comp";
import { MoreList } from "../../atoms/moreList/moreList.comp";
import { Container } from "../container/container.comp";
import { TitlePrimary } from "../titlePrimary/titlePrimary.comp";
import { AllSectionBox, AllSectionWrapper } from "./allSection.style";


export function AllSection() {
    return (
        <AllSectionWrapper>
            <Container>

                <AllSectionBox>
                    <TitlePrimary text="Collections" />
                    <CollectionsList>

                    </CollectionsList>
                </AllSectionBox>

                <AllSectionBox>
                    <TitlePrimary text="Genres" />
                    <GenresList>

                    </GenresList>
                </AllSectionBox>

                <AllSectionBox>
                    <TitlePrimary text="More" />
                    <MoreList>

                    </MoreList>
                </AllSectionBox>

            </Container>
        </AllSectionWrapper>
    )
}