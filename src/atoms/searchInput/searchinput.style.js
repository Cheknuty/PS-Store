import styled from "styled-components";
import search from "../../assests/img/search.svg"

export const SearchInputForm = styled.form`
`

export const SearchInputElement = styled.input`
    font-size: 12px;
    line-height: 16px;
    color: var(--color-stroke);
    border: none;
    background-color: var(--color-input);
    border-radius: 5px;
    padding: 9px 10px;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 10px;

    &::placeholder {
        font-size: 12px;
        line-height: 16px;
        color: var(--color-stroke);
        padding-left: 27px;
    }
    
    &:focus {
        outline: 1px solid var(--color-stroke);
    }

    &:not(:placeholder-shown) {
        background-image: none;
    }
`