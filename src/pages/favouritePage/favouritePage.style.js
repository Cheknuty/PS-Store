import styled from "styled-components";


export const FavouritePageWrapper = styled.div`
    padding: 40px 0;
    min-height: 70vh;
`

export const FavouritePageTitleWrapper = styled.div`
display: flex;
    align-items: center;
    margin-bottom: 30px;
    & h2 {
        margin: 0;
    }

    & a  {
        margin-right: 30px;
        & svg {
            display: block;
        }
    }
`