import { HeroSection } from "../../molecules/heroSection/heroSection.comp";
import { NavBar } from "../../molecules/navBar/navBar.comp";
import { HomeWrapper } from "./home.style";


export function Home() {
    return (
        <HomeWrapper>
            <NavBar />
            <HeroSection />
        </HomeWrapper>
    )
}