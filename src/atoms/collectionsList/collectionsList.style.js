import styled from "styled-components";


export const CollectionsListWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(5, max-content);
    justify-content: space-between;
    margin-bottom: 34px;

    @media screen and (max-width: 700px) {
        width: min-content;
        margin: 0 auto;
        grid-gap: 15px;
        & li:nth-child(1) {
            grid-area: a;
        }
        & li:nth-child(2) {
            grid-area: b;
        }
        & li:nth-child(3) {
            grid-area: c;
        }
        & li:nth-child(4) {
            grid-area: d;
        }
        & li:nth-child(5) {
            grid-area: e;
        }
        grid-template-areas:
        "a a b"
        "c d e";
    }
`