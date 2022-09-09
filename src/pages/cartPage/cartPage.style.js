import styled from "styled-components";


export const CartWrapper = styled.div`
    padding: 40px 0;
    min-height: 70vh;
`

export const CartTitleWrapper = styled.div`
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
