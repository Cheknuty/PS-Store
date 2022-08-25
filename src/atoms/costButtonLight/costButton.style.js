import styled from "styled-components";


export const CostButtonLightWrapper = styled.button`
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    border: none;
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-ps-blue);
    box-shadow: 0px 0px 15px var(--color-ps-blue);
    border-radius: 10px;
    width: 100%;
`

export const CostButtonLightBefore = styled.span`
    color: var(--color-explosive-grey);
    margin-right: 3px;
    text-decoration: line-through;

    &:after {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: var(--color-explosive-grey);
        display: inline-block;
        margin-left: 3px;
        margin-bottom: 2px;
    }
`

export const CostButtonLightAfter = styled.span`
    color: var(--color-light);
`