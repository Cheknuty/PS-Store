import styled from "styled-components";


export const SliderItemWrapper = styled.li`
    overflow: hidden;
    border-radius: 10px;
    width: 360px;
    height: 200px;
    transition: all 1s ease-in-out;

    &:not(:last-child) {
        margin-right: 35px;
    }

    @media screen and (max-width: 900px) {
        width: 300px;
        height: 180px;
    }

    @media screen and (max-width: 600px) {
        width: 220px;
        height: 150px;

        &:not(:last-child) {
            margin-right: 25px;
        }
    }
`

export const SliderItemImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
`