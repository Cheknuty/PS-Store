import { SonyLogo } from "../../atoms/sonyLogo/sonyLogo.comp";
import { Container } from "../container/container.comp";
import { TopLineWrapper } from "./topLine.style";


export function TopLine() {
    return (
        <TopLineWrapper>
            <Container>
                <SonyLogo />
            </Container>
        </TopLineWrapper>
    )
}