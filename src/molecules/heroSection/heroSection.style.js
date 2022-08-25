import styled from "styled-components";
import bg from "../../assests/img/hero.jpg"
import bg2x from "../../assests/img/hero@2x.jpg"
export const HeroSectionWrapper = styled.div`
    padding: 330px 0 51px 0;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: 1800px;

    @media
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
        background-image: url(${bg2x});
    }

    @media screen and (max-width: 900px) {
        background-size: 930px;
    }
`

export const HeroSectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 34px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        text-align: center;

        & img {
            width: 270px;
        }
    }
`

export const HeroSectionHeaderImg = styled.img`
    width: 311px;
`

export const HeroSectionHeaderText = styled.div`

    & span {
        margin-bottom: 12px;
        margin-left: auto;
    }

    @media screen and (max-width: 600px) {
        & span {
            margin: 0;
            margin-top: 10px;
        }
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
`