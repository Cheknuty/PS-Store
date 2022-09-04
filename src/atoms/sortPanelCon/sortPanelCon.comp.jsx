import { SortPanelConItem } from "../sortPanelConItem/sortPanelConItem.comp";
import { SortPanelConButton, SortPanelConHeader, SortPanelConList, SortPanelConTitle, SortPanelConWrapper } from "./sortPanelCon.style";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useRef } from "react";

export function SortPanelCon({title, arr}) {
    const panel = useRef()

    function panelToggle() {
        panel.current.dataset.active !== "true" ? panel.current.setAttribute("data-active", "true") : panel.current.removeAttribute("data-active")
    }
    return (
        <SortPanelConWrapper data-active="true" ref={panel}  id={title.toLowerCase()}>
            <SortPanelConHeader onClick={panelToggle}>
                <SortPanelConTitle>{title}</SortPanelConTitle>
                <SortPanelConButton id="toggler">
                    <AiOutlineMinus pointerEvents="none" color="var(--color-light)" fontSize="14" />
                    <AiOutlinePlus pointerEvents="none" color="var(--color-light)" fontSize="14" />
                </SortPanelConButton>
            </SortPanelConHeader>
            <SortPanelConList>
                {
                    arr.map((itm, idx) => <SortPanelConItem key={idx} text={itm} />)
                }
            </SortPanelConList>
        </SortPanelConWrapper>
    )
}