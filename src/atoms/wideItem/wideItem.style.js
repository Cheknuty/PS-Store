import styled from "styled-components";


export const WideItemWrapper = styled.li`
    max-width: 370px;
    width: 100%;
    background-color: var(--color-light);
    /* mix-blend-mode: multiply; */
    box-shadow: inset 30px -30px 55px 1px #000000;
    border-radius: 10px;
    padding: 12px 0 0 12px;
    background-image: url("https://d23gn3985hkc32.cloudfront.net/wp-content/uploads/2020/12/599684-Fall-Guys-Ultimate-Knockout-review.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 370px;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 26px;

    & span:first-child {
        margin-right: auto;
    }
`

export const WideItemTitle = styled.h3`
    font-weight: 800;
    font-size: 16px;
    line-height: 25px;
    margin: 0;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.35);
    color: var(--color-light);
    margin: 0 auto;
`

export const WideItemContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 138px;
    color: var(--color-light);
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    margin-left: auto;
    max-width: 138px;
    width: 100%;
`
export const WideItemCost = styled.span`
    
`

export const WideItemButton = styled.button`
    padding: 5px 11px 5px 10px;
    border-radius: 10px 0;
    background-color: var(--color-ps-blue);
    border: none;
    box-shadow: 0px 0px 15px #0072CE;
    color: var(--color-light);
`