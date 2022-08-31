import styled from "styled-components"

export const LikeIconNormal = styled.button`
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export const LikeIconBig = styled.button`
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    transform: scale(1.2);
    margin-left: 0.2em;
    cursor: pointer;

    &[data-active="true"] {
        & svg {
            fill: red;
        }
    }

    & svg {
        fill: #383838;
        pointer-events: none;
    }
    
    &:hover svg {
        fill: #ce4e4e;
    }

    &:active {

        transform: scale(1.4);
        & svg {
            fill: red;
        }
    }
`