import ps from "../../assests/img/ps.png"
import ps2x from "../../assests/img/ps@2x.png"
import { Container } from "../container/container.comp"
import { FooterContent, FooterContentItem, FooterCorp, FooterLogo, FooterWrapper } from "./footer.style"


export function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <FooterLogo src={ps} srcSet={`${ps} 1x, ${ps2x} 2x`} width="48" height="38" />
                <FooterContent>
                    <FooterContentItem>Support</FooterContentItem>
                    <FooterContentItem>Privacy Policy</FooterContentItem>
                    <FooterContentItem>Website</FooterContentItem>
                    <FooterContentItem>Terms of Use</FooterContentItem>
                    <FooterContentItem>Sitemap</FooterContentItem>
                    <FooterContentItem>Legal</FooterContentItem>
                    <FooterContentItem>About SIE</FooterContentItem>
                    <FooterContentItem>PSN Terms of Service</FooterContentItem>
                    <FooterContentItem>PS Store Cancellation Policy</FooterContentItem>
                    <FooterContentItem>Health Warning</FooterContentItem>
                    <FooterContentItem>About Ratings</FooterContentItem>
                    <FooterContentItem>Facebook</FooterContentItem>
                    <FooterContentItem>Twitter</FooterContentItem>
                    <FooterContentItem>YouTube</FooterContentItem>
                    <FooterContentItem>Instagram</FooterContentItem>
                    <FooterContentItem>Android App</FooterContentItem>
                    <FooterContentItem>iOS App</FooterContentItem>
                </FooterContent>
                <FooterCorp>© 2022 Sony Interactive Entertainment LLC</FooterCorp>
            </Container>
        </FooterWrapper>
    )
}