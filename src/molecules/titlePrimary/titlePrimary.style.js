import styled from "styled-components";


export const TitlePrimaryWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 34px;

    @media screen and (max-width: 600px) {
        margin-bottom: 22px;

        & h2 {
            font-size: 22px;
            line-height: 20px;
        }
    }
`

export const TitlePrimarHeading = styled.h2`
    font-weight: 700;
    font-size: 26px;
    line-height: 25px;
    color: var(--color-light);
`