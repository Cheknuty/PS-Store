import { DropDownBody } from "../../atoms/dropDownBody/dropDownBody.comp";
import { DropDownHead } from "../../atoms/dropDownHead/dropDownHead.comp";
import { DropDownrapper } from "./dropDown.style";


export function DropDown() {
    return(
        <DropDownrapper>
            <DropDownHead />
            <DropDownBody />
        </DropDownrapper>
    )
}