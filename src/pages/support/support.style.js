import styled from "styled-components";


export const SupportWrapper = styled.div`
    min-height: 63vh;

    & nav {
        top: 121px;
    }
`

export const SupportTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-top: 60px;
    margin-bottom: 30px;

    & h2 {
        margin: 0;
    }

    & a {
        margin-right: 30px;
        & svg {
            display: block;
        }
    }
`

export const SupportAbout = styled.p`
    color: var(--color-light);
    margin: 0;
`

export const SupportSoical = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;

    & a {

        &:not(:last-child) {
            margin-right: 10px;
        }
        color: var(--color-light);
        width: 40px;
        font-size: 30px;
        padding: 5px;
    }
`