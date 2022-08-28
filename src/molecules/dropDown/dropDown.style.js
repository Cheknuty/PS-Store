import styled from "styled-components";


export const DropDownrapper = styled.div`
    max-width: 115px;
    width: 100%;
    cursor: pointer;
    position: relative;
    
    & ul {
        display: none;
    }

    &:hover {
        & ul {
            display: block;
        }

        & h3::after {
            transform: rotate(180deg);
        }
        
    }
`