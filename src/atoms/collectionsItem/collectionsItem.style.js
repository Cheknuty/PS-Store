import styled from "styled-components";


export const CollectionsItemWrapper = styled.li`
    border-radius: 12px;
    overflow: hidden;

    height: 170px;
    width: auto;

    @media screen and (max-width: 1130px) {
        height: 100px;
    }

    @media screen and (max-width: 700px) {
        height: 170px;
    }

    @media screen and (max-width: 600px) {
        height: 110px;
    }

    @media screen and (max-width: 400px) {
        height: 90px;
    }

`

export const CollectionsItemImg = styled.img`
    display: block;
    border-radius: 12px;
    object-fit: cover;
    width: 100%;
    height: 100%;

`