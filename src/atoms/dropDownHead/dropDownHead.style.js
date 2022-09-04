import styled from "styled-components";
import down from "../../assests/img/downArr.svg"

export const DropDownHeadWrapper = styled.h3`
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: var(--color-stroke);
    margin: 0;
    position: relative;
    z-index: 10;

    &::after {
        content: "";
        background-image: url(${down});
        width: 8px;
        height: 5px;
        display: inline-block;
        margin-left: 5px;
        margin-bottom: 2px;
        transition: all 0.2s ease-in-out;
    }
`