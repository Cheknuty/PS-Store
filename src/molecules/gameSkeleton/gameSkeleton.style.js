import styled from "styled-components";


export const GameSkeletonWrapper = styled.div`
    width: 100%;
    height: 80vh;
    padding: 20px 0;
`

export const GameSkeletonHero = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    background-color: var(--color-stroke);
    padding: 10px;
    border-radius: 10px;
`

export const GameSkeletonHeroImg = styled.div`
    width: 60%;
    height: 100%;
    border-radius: 10px;
    background-color: var(--color-secondary);
`

export const GameSkeletonHeroDesc = styled.div`
    width: 35%;
    border-radius: 10px;
    background-color: var(--color-stroke);
    padding: 20px;
    background-color: var(--color-secondary);
    height: 100%;
`

export const GameSkeletonDescText  = styled.div`
    margin:  0 auto;
    height: 10px;
    background-color: var(--color-stroke);
    border-radius: 3px;
    width: 100%;
    
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`