import { useDispatch, useSelector } from "react-redux"
import { ListPrimary } from "../../atoms/listPrimary/listPrimary.comp"
import { TinyItem } from "../../atoms/tinyItem/tinyItem.comp"
import { TitlePrimary } from "../../atoms/titlePrimary/titlePrimary.comp"
import { Container } from "../../molecules/container/container.comp"
import { NavBar } from "../../molecules/navBar/navBar.comp"
import { ExploreBox, ExploreButton, ExploreContent, ExploreTitleWrapper, ExploreWrapper } from "./explore.style"
import { TinyItemSkeleton } from "../../atoms/tinyItemSkeleton/tinyItemSkeleton.comp"
import { SortPanel } from "../../molecules/sortPanel/sortPanel.comp"
import { useEffect } from "react"
import { fetchAllGames } from "./exploreSlice"
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { useRef } from "react"
import { useParams } from "react-router-dom"
import { BackButton } from "../../atoms/backButton/backButton.comp"
export function Explore() {
    const games = useSelector(state => state.allGamesList.sortedGames)
    const status = useSelector(state => state.allGamesList.status)
    const dispatch = useDispatch()
    const button = useRef()
    const { platform, genre, features } = useParams()

    function rightPanelToggle() {
        button.current.dataset.open === "true" ? button.current.removeAttribute("data-open") : button.current.setAttribute("data-open", "true")
    }
    
    useEffect(() => {
        dispatch(fetchAllGames({platform, genre, features}))
        // eslint-disable-next-line
    },[])
    return (
        <Container>
            <ExploreWrapper>
                <NavBar />
                <ExploreContent>
                    <ExploreBox>
                        <ExploreTitleWrapper>
                            <BackButton />
                            <TitlePrimary text="New Releases" />
                        </ExploreTitleWrapper>
                        <ListPrimary>
                            {
                                status === "resolved" ?
                                games.map(game => <TinyItem key={game.id} game={game} />) :
                                <>
                                    <TinyItemSkeleton />
                                    <TinyItemSkeleton />
                                    <TinyItemSkeleton />
                                    <TinyItemSkeleton />
                                    <TinyItemSkeleton />
                                </>
                            }
                        </ListPrimary>
                    </ExploreBox>

                    <ExploreBox  ref={button} >
                        <ExploreButton id="toggler" onClick={rightPanelToggle}>
                            <BsFillArrowLeftCircleFill pointerEvents="none" fontSize="30px" color="var(--color-light)" />
                        </ExploreButton>
                        <SortPanel />
                    </ExploreBox>

                </ExploreContent>
            </ExploreWrapper>
        </Container>
    )
}