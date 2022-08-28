import styled from "styled-components";


export const FooterWrapper = styled.footer`
    background-color: var(--color-ps-blue);
    padding: 28px 0;
    color: var(--color-light);
    text-align: center;
`

export const FooterLogo = styled.img`
    margin-bottom: 20px;
`

export const FooterContent = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    max-width: 1140px;
    margin: 0 auto;
    margin-bottom: 40px;
`

export const FooterContentItem = styled.span`
    display: inline-block;
    margin-bottom: 10px;
    &:not(:last-child)::after {
        content: "|";
        margin: 0 2px 0 2px;
    }
`

export const FooterCorp = styled.span`
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
`