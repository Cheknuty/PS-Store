import styled from "styled-components";


export const WideItemWrapper = styled.li`
    max-width: 370px;
    height: 128px;
    width: 100%;
    background-color: var(--color-light);
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 1160px) {
        max-width: 280px;
        & h3 {
            font-size: 14px;
            line-height: 20px;
        }
    }

    @media screen and (max-width: 900px) {
        max-width: 70%;
        height: 200px;

        &:not(:last-child) {
            margin-bottom: 20px;
        }

        & img {
            width: 100%;
            height: 100%;
        }

        & h3 {
            font-size: 16px;
            line-height: 25px;
        }
    }

    @media screen and (max-width: 600px) {
        max-width: 100%;
        height: 160px;
        & img {
            width: 650px;
            height: auto;
        }
    }

    & span:nth-last-child(3) {
        margin-left: 10px;
        margin-top: 10px;
    }
`

export const WideItemImg = styled.img`
    width: 370px;
    height: 128px;
    object-fit: cover;
`

export const WideItemTitle = styled.h3`
    font-weight: 800;
    font-size: 16px;
    line-height: 25px;
    margin: 0;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.35);
    color: var(--color-light);
    margin: 0 auto;
`

export const WideItemText = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 200;
    top: 0;
    left: 0;
    box-shadow: inset 40px -40px 55px 20px rgba(0, 0, 0, 0.75);

    @media screen and (max-width: 900px) {
        box-shadow: inset 60px -60px 100px 20px rgba(0, 0, 0, 0.75);
    }
`

export const WideItemContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 138px;
    color: var(--color-light);
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    margin-left: auto;
    max-width: 144px;
    width: 100%;
`
export const WideItemCost = styled.span`
    
`

export const WideItemButton = styled.button`
    padding: 5px 11px 5px 10px;
    border-radius: 10px 0;
    background-color: var(--color-ps-blue);
    border: none;
    box-shadow: 0px 0px 15px #0072CE;
    color: var(--color-light);
`