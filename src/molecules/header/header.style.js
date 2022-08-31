import styled from "styled-components";


export const HeaderWrapper = styled.header`
    
    padding: 11px 0 10px 0;

    & div:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (max-width: 900px) {
        
    }
`

export const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & div:nth-child(1) {
        margin-right: 10px;
    }

    & img:nth-child(2), & a:nth-child(3) {
        margin-right: 10px;
    }

    & a:nth-child(4) {
        margin-right: 16px;
    }

    & img:nth-child(5) {
        margin-right: 16px;
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`