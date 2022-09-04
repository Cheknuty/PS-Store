import styled from "styled-components";

export const SortPanelConItemWrapper = styled.li`
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.05em;
    padding: 4px;
    color: var(--color-light);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid var(--color-ps-blue);
    }

    &:not(:last-child) {
        margin-bottom: 2px;
    }

    & svg {
        display: none;
    }

    &[data-active="true"] {
        font-weight: 700;
        background: var(--color-ps-blue);
        box-shadow: 0px 0px 15px var(--color-ps-blue);
        & svg {
            display: block;
        }
    }
`