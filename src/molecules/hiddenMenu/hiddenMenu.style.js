import styled from "styled-components";


export const HiddenMenuBody = styled.div`
    position: fixed;
    left: 0;top: 0;
    z-index: 99;
    width: 30%;
    height: 100vh;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    transform: translateX(-100%);

    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-light);
    border-right: 1px solid var(--color-primary);
    

    & button {
        margin: 50px 10px 20px auto;
    }
    
`

export const HiddenMenuList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

export const HiddenMenuItem = styled.li`
    
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    line-height: 1;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;

    & a {
        color: var(--color-primaty);
        text-decoration: none;
    }

    &:hover {
        text-decoration: underline;
    }

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`