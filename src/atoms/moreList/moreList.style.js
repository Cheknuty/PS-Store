import styled from "styled-components";


export const MoreListWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;


    @media screen and (max-width: 650px) {
        flex-direction: column;
    }
`