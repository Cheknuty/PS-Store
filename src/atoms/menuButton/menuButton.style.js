import styled from "styled-components";


export const MenuButtonWrapper = styled.button`
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    width: 24px;
    height: 24px;
    display: none;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 900px) {
        display: flex;
    }
`