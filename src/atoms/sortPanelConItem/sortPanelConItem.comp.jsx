import { SortPanelConItemWrapper } from "./sortPanelConItem.style";
import { MdOutlineCheckCircleOutline } from "react-icons/md"
import { useRef } from "react";


export function SortPanelConItem({text}) {
    const item = useRef()

    function activeToggle(e) {
        item.current.dataset.active === "true" ? item.current.removeAttribute("data-active") : item.current.setAttribute("data-active", "true")
    }
    return (
        <SortPanelConItemWrapper ref={item} onClick={activeToggle}>
            {text}
            <MdOutlineCheckCircleOutline color="var(--color-primary)" fontSize="13px" />
        </SortPanelConItemWrapper>
    )
}