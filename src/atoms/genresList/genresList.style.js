import styled from "styled-components";


export const GenresListWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(6, max-content);
    justify-content: space-between;
    grid-row-gap: 20px;
    margin-bottom: 34px;

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(4, max-content);
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(3, max-content);
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(2, max-content);
    }
`