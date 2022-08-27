import styled from "styled-components";


export const WideItemSkeletonWrapper = styled.li`
    max-width: 370px;
    width: 100%;
    height: 128px;
    border-radius: 10px;
    background-color: var(--color-stroke);
    border: 1px solid var(--color-secondary);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    overflow: hidden;
    align-items: center;

    &:not(:last-child) {
        margin-right: 10px;
    }

    @media screen and (max-width: 900px) {
        max-width: 70%;
        height: 200px;
        &:not(:last-child) {
            margin-bottom: 10px;
            margin-right: 0;
            
        }
    }

    @media screen and (max-width: 600px) {
        max-width: 100%;
    }

    
`

export const WideItemSkeletonHeader = styled.div`
    width: 100px;
    height: 14px;
    border-radius: 2px;
    background-color: var(--color-secondary);
    margin: 12px auto 0 12px;

    @media screen and (max-width: 900px){
        margin-left: 25px;
        & + div {
            height: 70%;
        }
    }
`

export const WideItemSkeletonMain = styled.div`
    width: 92%;
    height: 60%;
    background-color: var(--color-secondary);
    border-radius: 2px;
    margin-bottom: 12px;
`