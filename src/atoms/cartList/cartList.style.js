import styled from "styled-components";


export const CartListWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    justify-content: left;

    @media screen and (max-width: 600px) {
        grid-row-gap: 30px;
    }
`