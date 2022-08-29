import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addPurchasedGames } from "../../pages/cartPage/cartSlice";
import { Tag } from "../tag/tag.comp";
import { WideItemButton, WideItemContent, WideItemCost, WideItemImg, WideItemText, WideItemTitle, WideItemWrapper } from "./wideItem.style";


export function WideItem({game}) {
    const button = useRef()
    const [value, setValue] = useState(game.isbought === true)
    const [text, setText] = useState(game.isbought === true ? "Purchased" :"Add To Cart")
    const dispatch = useDispatch()
    function clickHandler(e) {
        e.preventDefault()
        if(game.isbought !== true) {
            dispatch(addPurchasedGames(game))
            setText("Purchased")
            setValue(true)   
            console.log("add")
        }
        
    }
    return (
        <WideItemWrapper>
            <Link to={`game/${game.id}`}>
                <WideItemImg src={game.img} />
                <WideItemText>
                    <Tag text={game.fet}/>
                    <WideItemTitle>{game.title}</WideItemTitle>
                    <WideItemContent>
                        <WideItemCost>{game.after}</WideItemCost>
                        <WideItemButton ref={button} disabled={value} onClick={clickHandler}>{text}</WideItemButton>
                    </WideItemContent>
                </WideItemText>
            </Link>
        </WideItemWrapper>
    )
}