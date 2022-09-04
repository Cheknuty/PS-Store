import { SortPanelCon } from "../../atoms/sortPanelCon/sortPanelCon.comp";
import { SortPanelBox, SortPanelSearchButton, SortPanelTitle, SortPanelWrapper } from "./sortPanel.style";


export function SortPanel() {
    return (
        <SortPanelWrapper>
            <SortPanelTitle>Filters</SortPanelTitle>
            <SortPanelBox>
                <SortPanelCon title="Platform" arr={["PS5", "PS4", "PS VR", "PS2 Classic"]} />
                <SortPanelCon title="Genre" arr={["Action", "Arcade", "Fighting", "Horror", "Kids & Family", "Party, Music & Dance", "Platform", "Driving & Racing", "RPG", "Shooter", "Simulation", "Sports"]} />

            </SortPanelBox> 
            <SortPanelSearchButton>Sort</SortPanelSearchButton>
        </SortPanelWrapper>
    )
}