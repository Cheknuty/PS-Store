import styled from "styled-components";


export const ExploreWrapper = styled.div`
    min-height: 80vh;
    padding-top: 33px;

    & nav {
        top: 121px;
    }
`

export const ExploreContent = styled.main`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 30px;
`

export const ExploreBox = styled.div`
    &:nth-child(1) {
        
        width: 100%;
        & ul {
            @media screen and (min-width: 1400px) {
                grid-template-columns: repeat(5, 1fr);
            }

            @media screen and (max-width: 1300px) {
                grid-template-columns: repeat(4, 1fr);
                grid-column-gap: 25px;
                grid-row-gap: 18px;
            }

            @media screen and (max-width: 900px) {
                grid-template-columns: repeat(3, 1fr);
            }

            @media screen and (max-width: 600px) {
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 20px;
                grid-row-gap: 13px;
            }

            @media screen and (max-width: 450px) {
                grid-template-columns: 1fr;
                grid-row-gap: 30px;
            }
                }
            }

    &:nth-child(2) {
        padding-left: 40px;
        background-color: var(--color-secondary);
        background-color: rgba(31, 31, 31, 0.95);
        backdrop-filter: saturate(180%) blur(10px);


        @media screen and (max-width: 1110px) {
            padding: 0;
            width: 190px;
            position: fixed;
            right: 0;top: 0px;
            z-index: 99;
            min-height: 100vh;
            transition: all 0.5s ease-in-out;
            transform: translateX(100%);
            
            &[data-open="true"] {
                transform: translateX(0);

                & #toggler svg {
                    transform: rotate(180deg);
                }
            }
        }
        
    }
`

export const ExploreTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    & h2 {
        margin: 0;

        & + div li[data-active="true"] {
            color: var(--color-ps-blue);
        }
    }

    & h2 + div {
        max-width: 140px;
        & h3 {
            color: var(--color-explosive-grey);
        }

        & ul {
            top: 190px;
            max-width: max-content;
            padding-top: 0;
            background-color: var(--color-secondary);
            
            color: var(--color-light);
        }
    }
`

export const ExploreButton = styled.button`
    border: none;
    margin: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: transparent;
    margin-left: -45px;
    position: absolute;
    display: none;
    cursor: pointer;
    top: 210px;
    
    & svg {
        transition: all 500ms ease-in-out;
        position: absolute;
        top: 5px;
        left: 5px;
        background-color: var(--color-secondary);
        border: 1px solid var(--color-secondary);
        border-radius: 50%;
    }

    &:active {
        opacity: 0.8;
    }

    @media screen and (max-width: 1110px) {
        display: block;
    }
`