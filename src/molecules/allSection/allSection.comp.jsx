import { useSelector } from "react-redux";
import { CollectionsItem } from "../../atoms/collectionsItem/collectionsItem.comp";
import { CollectionsList } from "../../atoms/collectionsList/collectionsList.comp";
import { GenresItem } from "../../atoms/genresItem/genresItem.comp";
import { GenresList } from "../../atoms/genresList/genresList.comp";
import { MoreItem } from "../../atoms/moreItem/moreItem.comp";
import { MoreList } from "../../atoms/moreList/moreList.comp";
import { Container } from "../container/container.comp";
import { TitlePrimary } from "../titlePrimary/titlePrimary.comp";
import { AllSectionBox, AllSectionWrapper } from "./allSection.style";


export function AllSection() {
    const collections = useSelector(state => state.collectionsList.collections)
    const genres = useSelector(state => state.genresList.genres)
    const more = useSelector(state => state.moreList.more)
    return (
        <AllSectionWrapper>
            <Container>

                <AllSectionBox>
                    <TitlePrimary text="Collections" />
                    <CollectionsList>
                        {
                            collections.map((itm, idx) => <CollectionsItem key={idx} img={itm.img} img2x={itm.img2x} />)
                        }
                    </CollectionsList>
                    
                </AllSectionBox>

                <AllSectionBox>
                    <TitlePrimary text="Genres" />
                    <GenresList>
                        {
                            genres.map((itm, idx) => <GenresItem key={idx} img={itm.img} img2x={itm.img2x} />)
                        }
                    </GenresList>
                </AllSectionBox>

                <AllSectionBox>
                    <TitlePrimary text="More" />
                    <MoreList>
                        {
                            more.map((itm, idx) => <MoreItem key={idx} img={itm.img} img2x={itm.img2x} text={itm.text} />)
                        }
                    </MoreList>
                </AllSectionBox>

            </Container>
        </AllSectionWrapper>
    )
}