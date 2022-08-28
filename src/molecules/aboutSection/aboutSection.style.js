import styled from "styled-components";


export const AboutSectionWrapper = styled.section`
    padding: 20px 0;
    & #container {
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
    }
`

export const AboutSectionTextContent = styled.div`
    color: var(--color-input);
    max-width: 500px;
    width: 100%;
`

export const AboutSectionTextContentTitle = styled.h3`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
`

export const AboutSectionTextContentDesc = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
`

export const AboutSectionInfoContent = styled.div`
    max-width: 200px;
    width: 100%;
    margin-left: 30px;
`

export const AboutSectionInfo = styled.div`
    margin-bottom: 10px;
`

export const AboutSectionInfoTitle = styled.h3`
    margin: 0;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--color-explosive-grey);
`

export const AboutSectionInfoSubtitle = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: var(--color-light);
    margin: 0;
`