import styled from "styled-components";


export const CartItemWrapper = styled.li`
    display: flex;
    align-items: flex-start;

    @media screen and (max-width: 900px) {
        & img {
            max-width: 250px;
            width: 100%;
        }

        & h3 {
            font-size: 18px;
            margin-bottom: 7px;
        }

        & p {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;

        & img {
            margin-bottom: 15px;
            max-width: 80%;
        }

        & div {
            padding: 0;
        }
    }

`

export const CartItemImg = styled.img`
    border-radius: 10px;
`

export const CartItemContent = styled.div`
    color: var(--color-light);
    padding: 10px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: left;
`

export const CartItemContentTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 22px;
`

export const CartItemContentCompany = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 14px;
`