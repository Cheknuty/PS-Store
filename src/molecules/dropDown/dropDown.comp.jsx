import { DropDownBody } from "../../atoms/dropDownBody/dropDownBody.comp";
import { DropDownHead } from "../../atoms/dropDownHead/dropDownHead.comp";
import { DropDownrapper } from "./dropDown.style";


export function DropDown({arr, title, isFunctional}) {
    return(
        <DropDownrapper id={title.toLowerCase()}>
            <DropDownHead title={title} />
            <DropDownBody arr={arr} isFunctional={isFunctional} />
        </DropDownrapper>
    )
}