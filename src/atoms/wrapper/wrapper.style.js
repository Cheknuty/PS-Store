import styled from "styled-components";


export const WrapperBody = styled.div`
    position: relative;
    overflow-x: hidden;

    & .active--menu {
        transform: translateX(0);
    }

    & .active--content {
        transform: translateX(30%);
    }

    @media screen and (max-width: 600px) {
        & .active--menu {
        transform: translateX(0);
    }

    & .active--content {
        transform: translateX(40%);
    }
    }
`