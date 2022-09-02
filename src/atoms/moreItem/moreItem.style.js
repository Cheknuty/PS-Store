import styled from "styled-components";


export const MoreItemWrapper = styled.li`
    position: relative;
    background-color: var(--color-primary);
    max-width: 320px;
    border-radius: 10px;
    overflow: hidden;

    @media screen and (max-width: 1020px) {
        width: 260px;

        & h3 {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 820px) {
        width: 200px;

        & h3 {
            font-size: 15px;
        }
    }

    @media screen and (max-width: 650px) {
        width: 100%;

        & h3 {
            font-size: 20px;
        }

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    
`

export const MoreItemIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`

export const MoreItemTitle = styled.h3`
    margin: 0;
    position: absolute;
    font-weight: 700;
    font-size: 24px;
    line-height: 25px;
    color: var(--color-light);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`