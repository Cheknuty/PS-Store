import styled from "styled-components";


export const EpicSectionWrapper = styled.section`
    padding: 50px 0;

    & div:first-child {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    @media screen and (max-width: 960px) {
        padding: 40px;
        & div:first-child {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 750px) {
        padding: 20px 10px;
    }
`


export const EpicSectionImg = styled.img`
    max-width: 600px;
    width: 100%;
    border-radius: 15px;

    @media screen and (max-width: 1260px) {
        max-width: 500px;
    }

    @media screen and (max-width: 960px) {
        max-width: 100%;
        margin-bottom: 30px;
    }
`

export const EpicSectionGradient = styled.div`
    position: absolute;
    /* background-color: rgba(256, 256, 256, 0.7); */
    width: 100%;
    height: 100%;
    top: 0;
    color: white;
    background: rgb(31,31,31);
    background: linear-gradient(0deg, rgba(31,31,31,0.98) 17%, rgba(255,255,255,0) 100%);
`

export const EpicSectionContent = styled.div`
    display: grid;
    grid-row-gap: 14px;
    grid-template-columns: 1fr;
    color: var(--color-light);

    @media screen and (max-width: 960px) {
        max-width: 90%;
        margin-right: auto;
        & h2 {
            max-width: 100%;
        }
    }

    @media screen and (max-width: 750px) {
        & h2 {
            font-size: 25px;
        }

        & p {
            font-size: 10px;
        }
    }
`

export const EpicSectionTitle = styled.h2`
    margin: 0;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    max-width: 380px;
`

export const EpicSectionInfo = styled.div`
    display: flex;
    align-items: center;

    & span {
        color: var(--color-primary);
        margin-right: 10px;
    }
`

export const EpicSectionCompany = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    margin-right: 3px;
`

export const EpicSectionDate = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
`

export const EpicSectionRules = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    color: var(--color-explosive-grey);
    max-width: 285px;

`

export const EpicSectionIcon = styled.img`
    margin-right: 5px;
`

