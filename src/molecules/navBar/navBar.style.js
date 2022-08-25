import styled from "styled-components";


export const NavBarWrapper = styled.nav`
    position: absolute;
    left: 0;
    top: 15px;
    width: 100%;

    & div:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const NavBarBox = styled.span`
    color: var(--color-explosive-grey);
    & a {
        font-weight: 800;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.06em;
        color: var(--color-explosive-grey);
        text-decoration: none;
    }

    & .active {
        color: var(--color-light);
    }
`