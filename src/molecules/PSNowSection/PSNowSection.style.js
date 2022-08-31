import styled from "styled-components";
import now from "../../assests/img/now.png"
import now2x from "../../assests/img/now@2x.png"
import logo from "../../assests/img/nowLogo.png"
import logo2x from "../../assests/img/nowLogo@2x.png"


export const PSNowSectionWrapper = styled.section`
    min-height: 400px;
    background-image: url(${now});
    background-position-x: right;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    @media
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (   min--moz-device-pixel-ratio: 2),
    only screen and (     -o-min-device-pixel-ratio: 2/1),
    only screen and (        min-device-pixel-ratio: 2),
    only screen and (                min-resolution: 192dpi),
    only screen and (                min-resolution: 2dppx) {
        & {
            background-image: url(${now2x});
        } 
    }

    & #container {
        display: flex;
        align-items: center;
    }
`

export const PSNowSectionDesc = styled.p`
    margin-top: 0;
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: var(--color-titanium-white);
    max-width: 300px;
    text-align: center;
`

export const PSNowSectionContent = styled.div`
    text-align: center;
    background-image: url(${logo});
    background-position-x: center;
    background-position-y: -156px;
    padding-left: 100px;
    padding-top: 100px;
    background-size: 400px;
    background-repeat: no-repeat;

    @media
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (   min--moz-device-pixel-ratio: 2),
    only screen and (     -o-min-device-pixel-ratio: 2/1),
    only screen and (        min-device-pixel-ratio: 2),
    only screen and (                min-resolution: 192dpi),
    only screen and (                min-resolution: 2dppx) {
        & {
            background-image: url(${logo2x});
        } 
    }

    @media screen and (max-width: 500px) {
        padding-left: 0;
        background-size: 300px;
        background-position-y: -115px;
    }
`

export const PSNowSectionImg = styled.img`
    width: 286px;
    height: 424px;
    position: relative;
    margin-top: -23px;
    margin-left: 150px;

    @media screen and (max-width: 900px) {
        display: none;
    }
`