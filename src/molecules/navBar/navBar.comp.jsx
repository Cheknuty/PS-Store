import { NavLink } from "react-router-dom";
import { Container } from "../container/container.comp";
import { NavBarBox, NavBarWrapper } from "./navBar.style";


export function NavBar() {
    return (

        <NavBarWrapper>
            <Container>

                <NavBarBox>
                    <NavLink to="/">DISCOVER </NavLink>|
                    <NavLink to="/explore"> EXPLORE</NavLink>
                </NavBarBox>

                <NavBarBox>
                    <NavLink to="/">COLLECTIONS </NavLink>|
                    <NavLink to="/"> DEALS </NavLink>|
                    <NavLink to="/"> SUBSCRIPTIONS</NavLink>
                </NavBarBox>

            </Container>
        </NavBarWrapper>
    )
}