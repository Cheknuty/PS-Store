import styled from "styled-components";


export const GenresItemWrapper = styled.li`
    border-radius: 10px;
    overflow: hidden;
    width: 170px;

    @media screen and (max-width: 800px) {
        width: 140px;
    }
`

export const GenresItemIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`