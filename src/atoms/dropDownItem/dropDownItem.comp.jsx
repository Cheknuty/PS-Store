import { useRef } from "react";
import { DropDownItemWrapper } from "./dropDownItem.style";


export function DropDownItem({text, isFunctional}) {
    const item = useRef()
    function clickHadler() {
        if(isFunctional === "true") {
            const list = item.current.closest("ul").childNodes
            for(let i = 0; i < list.length; i++) {
                if(item.current.textContent === list[i].textContent) item.current.setAttribute("data-active", "true")
                else list[i].removeAttribute("data-active")
            }
        }
    }

    return (
        <DropDownItemWrapper ref={item}  onClick={clickHadler}>{text}</DropDownItemWrapper>
    )
}