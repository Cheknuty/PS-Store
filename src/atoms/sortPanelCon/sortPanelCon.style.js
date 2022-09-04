import styled from "styled-components";


export const SortPanelConWrapper = styled.div`
    transition: all 250ms ease-in-out;
    height: 30px;

    &[data-active="true"]  {
        height: 100%;

        &:not(:last-child) {
            margin-bottom: 33px;
        }

        #toggler {
            & svg:nth-child(2) {
                display: none;
            }
    
            & svg:nth-child(1) {
                display: block;
                
            }
        }
        & ul {
            transform: scaleY(1);
        }
    }

`

export const SortPanelConHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

`

export const SortPanelConTitle = styled.h4`
    margin: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: var(--color-light);
`

export const SortPanelConButton = styled.button`
    width: 20px;
    height: 20px;
    padding: 5px;
    border: none;
    margin: 0;
    background-color: transparent;
    position: relative;
    cursor: pointer;

    & svg {
        top: 3px;
        left: 3px;
        position: absolute;
        &:nth-child(2) {
            display: block;
        }

        &:nth-child(1) {
            display: flex;
        }
    }
`

export const SortPanelConList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    transform-origin: top center;
    transition: transform  250ms ease-in-out;
    transform: scaleY(0);
    margin-top: 10px;
    
`