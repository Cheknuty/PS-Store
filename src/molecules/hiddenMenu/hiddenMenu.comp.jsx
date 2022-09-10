import { Link } from "react-router-dom";
import { MenuButton } from "../../atoms/menuButton/menuButton.comp";
import { HiddenMenuBody, HiddenMenuItem, HiddenMenuList } from "./hiddenMenu.style";

export function HiddenMenu() {
    return (
        <HiddenMenuBody>
            <MenuButton />
            <HiddenMenuList>
                <HiddenMenuItem>
                    <Link to="/">DISCOVER</Link>
                </HiddenMenuItem>
                <HiddenMenuItem>
                    <Link to="/explore/def/def/def/def">EXPLORE</Link>
                </HiddenMenuItem>
                <HiddenMenuItem>
                    <Link to="/support">SUPPORT</Link>
                </HiddenMenuItem>
                <HiddenMenuItem>
                    <Link to="/favourite">Favorites</Link>
                </HiddenMenuItem>
                <HiddenMenuItem>
                    <Link to="/cart">Cart</Link>
                </HiddenMenuItem>
            </HiddenMenuList>
        </HiddenMenuBody>
    )
}