import { useSelector } from "react-redux";
import { TinyItem } from "../../atoms/tinyItem/tinyItem.comp";
import { TinyItemSkeleton } from "../../atoms/tinyItemSkeleton/tinyItemSkeleton.comp";
import { Container } from "../container/container.comp";
import { TinyList } from "../tinyList/tinyList.comp";
import { ComingSoonSectionWrapper } from "./comingSoonSection.style";


export function ComingSoonSection() {
    const comingSoonGames = useSelector(state => state.comingSoonList.games)
    const status = useSelector(state => state.comingSoonList.status)
    return (
        <ComingSoonSectionWrapper>
            <Container>
                <TinyList text="Coming Soon">
                    {
                        status === "resolved" ?
                        comingSoonGames.map(game => <TinyItem id={game.id} key={game.id} title={game.title} img={game.img} company={game.company} tag={game.fet} before={game.before} after={game.after} />) :
                        <>
                            <TinyItemSkeleton />
                            <TinyItemSkeleton />
                            <TinyItemSkeleton />
                            <TinyItemSkeleton />
                            <TinyItemSkeleton />
                            <TinyItemSkeleton />
                        </>
                    }
                </TinyList>
            </Container>
        </ComingSoonSectionWrapper>
    )
}