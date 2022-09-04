import { DropDownItem } from "../dropDownItem/dropDownItem.comp";
import { DropDownBodyWrapper } from "./dropDownBody.style";


export function DropDownBody({arr, isFunctional}) {
    return (
        <DropDownBodyWrapper>
            {
                arr.map((itm, idx) => <DropDownItem key={idx} text={itm} isFunctional={isFunctional} />)
            }
        </DropDownBodyWrapper>
    )
}