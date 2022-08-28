import styled from "styled-components";


export const SliderWrapper = styled.section`
    position: relative;
    overflow: hidden;
`

export const SliderList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    display: flex;
    align-items: center;
    padding: 12px 0;
    transition: all 0.5s ease-in-out;
    left: calc(50% - 972px);

    @media screen and (max-width: 900px) {
        left: calc(50% - 820px);
    }

    @media screen and (max-width: 600px) {
        left: calc(50% - 600px);
    }

    & li[data-active="true"] {
        transform: scale(1.12);
    }
`

export const SliderMarkers = styled.div`
    display: flex;
    align-items: center;
    max-width: max-content;
    margin: 0 auto;
    padding: 250px 0 30px 0;

    & button[data-active="true"] {
        background-color: var(--color-ps-blue);
    }

    @media screen and (max-width: 900px) {
        padding-top: 230px;
    }

    @media screen and (max-width: 600px) {
        padding-top: 200px;
    }
`

export const SliderMarker = styled.button`
    background-color: var(--color-stroke);
    margin: 0;
    padding: 0;
    border: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 10px;
    }
`