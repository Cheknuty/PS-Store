import styled from "styled-components";
import bg from "../../assests/img/plusBg.jpg"
import bg2x from "../../assests/img/plusBg@2x.jpg"

export const PSPlusSectionWrapper = styled.section`
    height: 450px;
    position: relative;
    padding: 124px 0 51px 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${bg});
    @media
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (   min--moz-device-pixel-ratio: 2),
    only screen and (     -o-min-device-pixel-ratio: 2/1),
    only screen and (        min-device-pixel-ratio: 2),
    only screen and (                min-resolution: 192dpi),
    only screen and (                min-resolution: 2dppx) { 
        background-image: url(${bg2x});
    }

`

export const PSPlusSectionContent = styled.div`
    padding-left: 40px;
    z-index: 10;
    position: relative;
    text-align: center;
    max-width: 500px;
`

export const PSPlusSectionIcon = styled.img`
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;

    @media screen and (max-width: 1000px) {
        display: none;

        & + div {
            display: flex;
            justify-content: center;

            & div {
                padding-left: 0;
                max-width: 400px;
            }
        }
    }
`

export const PSPlusSectionImg = styled.img`
    
`

export const PSPlusSectionDesc = styled.p`
    margin-top: 20px;
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.08em;
    color: var(--color-light);
    text-align: center;

    & + button {
        margin: 0 auto;
        display: block;
    }
`