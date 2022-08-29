import styled from "styled-components";


export const CartIconWrapper = styled.span`
    width: max-content;
    height: 207px;
    margin: 100px auto;

    & svg {
        transform: scale(1.5);
        margin: 0 auto;
        display: block;
    }

    @media screen and (max-width: 600px) {
        margin: 60px auto;

        & svg {
            transform: scale(1.2);
        }

        & p {
            font-size: 18px;
            margin-top: 30px;
        }
    }
`

export const CartIconDesc = styled.p`
    color: var(--color-light);
    margin-top: 40px;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 600;
`