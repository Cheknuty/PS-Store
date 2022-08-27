import styled from "styled-components";


export const TinyItemSkeletonWrapper = styled.li`
    border-radius: 10px;
    background-color: var(--color-stroke);
    border: 1px solid var(--color-secondary);
    height: 404px;
    max-width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`

export const TinyItemSkeletonMain = styled.div`
    width: 90%;
    height: 80%;
    margin-top: 10px;
    background-color: var(--color-secondary);
    border-radius: 5px;
`

export const TinyItemSkeletonFooter = styled.div`
    width: 90%;
    height: 5%;
    background-color: var(--color-secondary);
    margin-bottom: auto;
    margin-top: 25px;
    border-radius: 5px;
`