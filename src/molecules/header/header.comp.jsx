import { Container } from "../container/container.comp";
import { Logo } from "../../atoms/logo/logo.comp"
import { HeaderBox, HeaderWrapper } from "./header.style";
import { DropDown } from "../dropDown/dropDown.comp";
import { Avatar } from "../../atoms/avatar/avatar.comp";
import { Like } from "../../atoms/like/like.comp";
import { Cart } from "../../atoms/cart/cart.comp";
import { SearchInput } from "../../atoms/searchInput/searchInput.comp";
import { MenuButton } from "../../atoms/menuButton/menuButton.comp";

export function Header() {
    return (
        <HeaderWrapper>
            <Container>
                <Logo />
                <HeaderBox>
                    <DropDown title="My Playstation" arr={["Support", "Privacy Policy", "Website", "Terms of Use", "Sitemap"]} />
                    <Avatar />
                    <Like />
                    <Cart />
                    <SearchInput />
                </HeaderBox>
                <MenuButton />
            </Container>
        </HeaderWrapper>
    )
}