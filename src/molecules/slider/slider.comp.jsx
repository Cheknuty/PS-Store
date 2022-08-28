import { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SliderItem } from "../../atoms/sliderItem/sliderItem.comp";
import { SliderList, SliderMarker, SliderMarkers, SliderWrapper } from "./silder.style";
import sliderLogic from "./sliderLogic";


export function Slider() {
    const { id } = useParams()
    const allGames = useSelector(state => state.allGamesList.games)
    const game = allGames.find(game => game.id === id);
    const list = useRef()
    const markers = useRef()
    return (
        <SliderWrapper ref={list} data-type="slider">
            <SliderList id="list">
                {
                    game.gallery.map((img, idx) => <SliderItem key={idx} img={img} id={idx - 2} />)
                }
            </SliderList>
            <SliderMarkers ref={markers} id="marker">
                {
                    game.gallery.map((_, idx) => <SliderMarker key={idx} id={idx - 2} data-active={(idx - 2) === 0} onClick={(e) =>sliderLogic(markers, e)} />)
                }
            </SliderMarkers>
        </SliderWrapper>
    )
}