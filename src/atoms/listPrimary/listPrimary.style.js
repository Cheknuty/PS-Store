import styled from "styled-components";


export const ListPrimaryWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 22px;

    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media screen and (max-width: 1060px) {
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 25px;
        grid-row-gap: 18px;
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 13px;
    }

    @media screen and (max-width: 450px) {
        grid-template-columns: 1fr;
        grid-row-gap: 30px;
    }
`