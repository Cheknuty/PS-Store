import styled from "styled-components";
import card1 from "../../assests/img/card1.png"
import card2 from "../../assests/img/card2.png"
import card3 from "../../assests/img/card3.png"
import card12x from "../../assests/img/card1@2x.png"
import card22x from "../../assests/img/card2@2x.png"
import card32x from "../../assests/img/card3@2x.png"

export const SalesDealsSectionWrapper = styled.section`
    padding-bottom: 34px;
`

export const SalesDealsSectionList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 22px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`

export const SalesDealsSectionItem = styled.li`
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    max-width: 370px;
    width: 100%;
    text-align: center;
    background-position: center;



    &:nth-child(1) {
        background-image: url(${card1});
        @media
        only screen and (-webkit-min-device-pixel-ratio: 2),
        only screen and (   min--moz-device-pixel-ratio: 2),
        only screen and (     -o-min-device-pixel-ratio: 2/1),
        only screen and (        min-device-pixel-ratio: 2),
        only screen and (                min-resolution: 192dpi),
        only screen and (                min-resolution: 2dppx) { 
            background-image: url(${card12x});
        }
        padding: 63px 0;
        background-color: var(--color-primary);
        & div {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: left;
        }
        
        & p {
            font-weight: 800;
            font-size: 18px;
            line-height: 25px;
            color: var(--color-light);
            max-width: 128px;
            margin-left: 12px;
            text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.45);
        }
    }

    &:nth-child(2) {
        background-image: url(${card2});
        @media
        only screen and (-webkit-min-device-pixel-ratio: 2),
        only screen and (   min--moz-device-pixel-ratio: 2),
        only screen and (     -o-min-device-pixel-ratio: 2/1),
        only screen and (        min-device-pixel-ratio: 2),
        only screen and (                min-resolution: 192dpi),
        only screen and (                min-resolution: 2dppx) { 
            background-image: url(${card22x});
        }
        background-color: var(--color-light);
        padding: 5px 0;
        color: var(--color-light);
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;

        & p {
            margin-top: 0;

            &:nth-child(1) {
                margin-bottom: 0;
            }

            &:nth-child(2) {
                color: var(--color-ps-blue);
                font-weight: 600;
                font-size: 80px;
                line-height: 109px;
                margin-bottom: 26px;
            }
        }
    }

    &:nth-child(3) {
        background-image: url(${card3});
        @media
        only screen and (-webkit-min-device-pixel-ratio: 2),
        only screen and (   min--moz-device-pixel-ratio: 2),
        only screen and (     -o-min-device-pixel-ratio: 2/1),
        only screen and (        min-device-pixel-ratio: 2),
        only screen and (                min-resolution: 192dpi),
        only screen and (                min-resolution: 2dppx) { 
            background-image: url(${card32x});
        }
        background-color: var(--color-primary);
        padding: 80px 0 25px 0;

        & p {
            margin-top: 34px;
            font-weight: 800;
            font-size: 18px;
            line-height: 25px;
            color: var(--color-bright-saffron);
        }
    }

    @media screen and (max-width: 1180px) {
        max-width: 300px;

        &:not(:last-child) {
            margin-right: 10px;
        }
    }

    @media screen and (max-width: 800px) {
        max-width: 80%;

        &:nth-child(2) {
            background-size: 370px;
        }
        
        &:not(:last-child) {
            margin-bottom: 30px;
            margin-right: 0;
        }
    }

    @media screen and (max-width: 500px) {
        max-width: 100%;
    }
`

export const SalesDealsSectionItemContent = styled.div`

`

export const SalesDealsSectionItemIcon = styled.img`

`

export const SalesDealsSectionItemDesc = styled.p`
    margin: 0;
`