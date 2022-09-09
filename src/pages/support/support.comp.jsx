import { BackButton } from "../../atoms/backButton/backButton.comp";
import { TitlePrimary } from "../../atoms/titlePrimary/titlePrimary.comp";
import { Container } from "../../molecules/container/container.comp";
import { NavBar } from "../../molecules/navBar/navBar.comp";
import { SupportAbout, SupportSoical, SupportTitleWrapper, SupportWrapper } from "./support.style";
import { BsInstagram, BsLinkedin, BsGithub, BsTelegram } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"

export function Support() {
    return (
        <SupportWrapper>
            <Container>
                <NavBar />
                <SupportTitleWrapper>
                    <BackButton />
                    <TitlePrimary text="Support" />
                </SupportTitleWrapper>
                <SupportAbout>
                    Salute my name is Khikmat (Zero). 
                    And I created this application. This application implements the functionality of an online store. 
                    And this app is in my portfolio. If you notice bugs then it's related to Heroku. 
                    My social nets below
                </SupportAbout>
                <SupportSoical>
                    <a href="https://www.instagram.com/xikmatjon_/" target={"_blank"} rel="noreferrer">
                        <BsInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/khikmatjon-azizov-1865b024a/" target={"_blank"} rel="noreferrer">
                        <BsLinkedin />
                    </a>
                    <a href="https://github.com/Cheknuty" target={"_blank"} rel="noreferrer">
                        <BsGithub />
                    </a>
                    <a href="azizovxikmatjon04@gmail.com" target={"_blank"} rel="noreferrer">
                        <HiOutlineMail />
                    </a>
                    <a href="https://t.me/Cheknuty" target={"_blank"} rel="noreferrer">
                        <BsTelegram />
                    </a>
                </SupportSoical>
            </Container>
        </SupportWrapper>
    )
}