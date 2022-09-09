import { NavLink } from "react-router-dom";
import { Container } from "../container/container.comp";
import { NavBarBox, NavBarWrapper } from "./navBar.style";


export function NavBar() {
    
    
    return (

        <NavBarWrapper>
            <Container>

                <NavBarBox>
                    <NavLink to="/">DISCOVER </NavLink>|
                    <NavLink to="/explore/def/def/def" > EXPLORE</NavLink>
                </NavBarBox>

                <NavBarBox>
                    <NavLink to="/support">SUPPORT</NavLink>
                    
                </NavBarBox>

            </Container>
        </NavBarWrapper>
    )
}