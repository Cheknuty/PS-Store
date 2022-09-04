import styled from "styled-components";


export const SortPanelWrapper = styled.div`

    @media screen and (max-width: 1110px) {
        padding: 220px 20px 20px 20px;
        overflow-y: scroll;
        height: 100vh;   
    }
`

export const SortPanelTitle = styled.h3`
    margin-top: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: var(--color-light);
    margin-bottom: 33px;
`

export const SortPanelBox = styled.div`
    margin-bottom: 30px;
    
`

export const SortPanelSearchButton = styled.button`
    margin: 0;
    padding: 0;
    border: none;
    background: var(--color-ps-blue);
    box-shadow: 0px 0px 15px var(--color-ps-blue);
    padding: 5px 0;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -0.05em;
    width: 100%;
    color: var(--color-light);
    border-radius: 6px;

    cursor: pointer;

    &:hover {
        box-shadow: none;
    }

    &:active {
        opacity: 0.8;
    }
`