import styled from "styled-components";


export const TinyItemWrapper = styled.li`
    border: 1px solid var(--color-stroke);
    border-radius: 10px;
    overflow: hidden;
    background-color: var(--color-secondary);

    & a {
        text-decoration: none;
    }

    @media screen and (max-width: 1400px) {
        & img {
            height: 300px;
        }
    }

    @media screen and (max-width: 1060px) {
        & img {
            
        }
    }
`

export const TinyItemImg = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
    position: relative;
    top: 0px;
`

export const TinyItemContent = styled.div`
    padding: 10px 6px 8px 6px;
`

export const TinyItemTitle = styled.h3`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    font-weight: 800;
    font-size: 12px;
    line-height: 16px;
    color: var(--color-light);
    margin: 0;
    margin-bottom: 1px;
`

export const TinyItemCompany = styled.p`
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    margin: 0;
    color: var(--color-explosive-grey);
    margin-bottom: 11px;

    & + span {
        margin-bottom: 13px;
    }
`