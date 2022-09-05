import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SortPanelCon } from "../../atoms/sortPanelCon/sortPanelCon.comp";
import { allFeatures, allGenres, allPlatforms, fetchAllGames, sort } from "../../pages/explore/exploreSlice";
import { SortPanelBox, SortPanelSearchButton, SortPanelTitle, SortPanelWrapper } from "./sortPanel.style";


export function SortPanel() {
    const dispatch = useDispatch()
    const genres = useSelector(state => state.allGamesList.genres)
    const status = useSelector(state => state.allGamesList.status)
    const platforms = useSelector(state => state.allGamesList.platforms)
    const features = useSelector(state => state.allGamesList.features)
    const sortRef = useRef()

    useEffect(() => {
        dispatch(allGenres())
        dispatch(allFeatures())
        dispatch(allPlatforms())
        // eslint-disable-next-line
    }, [status])

    function clickHandler() {
        const target = sortRef.current
        const platforms = target.querySelector("#platform").querySelector("ul").childNodes
        const genres = target.querySelector("#genre").querySelector("ul").childNodes
        const features = target.querySelector("#features").querySelector("ul").childNodes
        
        const resultPlt = activeCheck(platforms)
        const resultGen = activeCheck(genres)
        const resultFet = activeCheck(features)

        function activeCheck(arr) {
            const result = []
            arr.forEach(item => {
                if(item.dataset.active) {
                    result.push(item.textContent)
                }
            });

            return result
        }

        

        dispatch(sort({
            fet: resultPlt,
            genre: resultGen,
            features: resultFet
        }))
    }

    
    return (

        <>
            {
                status === "resolved" &&
                <SortPanelWrapper ref={sortRef}>
                    <SortPanelTitle>Filters</SortPanelTitle>
                    <SortPanelBox>
                        <SortPanelCon title="Platform" arr={platforms} />
                        <SortPanelCon title="Genre" arr={genres} />
                        <SortPanelCon title="Features" arr={features} />
                    </SortPanelBox>
                    <SortPanelSearchButton onClick={clickHandler}>Sort</SortPanelSearchButton>
                </SortPanelWrapper>
            }
        </>
    )
}