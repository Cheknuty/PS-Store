import { useRef } from "react";
import sliderLogic from "../../molecules/slider/sliderLogic";
import { SliderItemImg, SliderItemWrapper } from "./sliderItem.style";


export function SliderItem({img, id}) {
    const item = useRef()
    return (
        <SliderItemWrapper ref={item} onClick={(e) => sliderLogic(item, e)} id={id} data-active={id === 0} data-type="item">
            <SliderItemImg src={img} />
        </SliderItemWrapper>
    )
}