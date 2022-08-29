import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPurchasedGames } from "../../pages/cartPage/cartSlice";
import { CostButtonLightAfter, CostButtonLightBefore, CostButtonLightWrapper } from "./costButtonLight.style";


export function CostButtonLight({ before, after, id, isbought }) {
    const games = useSelector(state => state.allGamesList.games)
    const game = games.find(game => game.id === id)
    const button = useRef()
    const [value, setValue] = useState(isbought === true)
    const dispatch = useDispatch()
    function clickHandler(e) {
        e.preventDefault()
        if(game.isbought !== true) {
            dispatch(addPurchasedGames(game))
            button.current.innerHTML = "Purchased"
            setValue(true)   
        }
        
    }

    return (
        <CostButtonLightWrapper ref={button} disabled={value} onClick={clickHandler}>
            {
                isbought === true ?
                <CostButtonLightAfter>Purchased</CostButtonLightAfter>:
                (before !== "") ?
                    <>
                        <CostButtonLightBefore>{before}</CostButtonLightBefore>
                        <CostButtonLightAfter>{after}</CostButtonLightAfter>
                    </>:
                    <CostButtonLightAfter>{after}</CostButtonLightAfter>
            }
        </CostButtonLightWrapper>
    )
}