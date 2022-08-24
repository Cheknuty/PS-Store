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
                    <Link to="/expore">EXPLORE</Link>
                </HiddenMenuItem>
                <HiddenMenuItem>
                    <Link to="/collection">COLLECTIONS</Link>
                </HiddenMenuItem>
                <HiddenMenuItem>
                    <Link to="/deals">DEALS</Link>
                </HiddenMenuItem>
                <HiddenMenuItem>
                    <Link to="/subpscription">SUBSCRIPTIONS</Link>
                </HiddenMenuItem>
                <HiddenMenuItem>
                    <Link to="/profile">Profile</Link>
                </HiddenMenuItem>
                <HiddenMenuItem>
                    <Link to="/favourites">Favorites</Link>
                </HiddenMenuItem>
                <HiddenMenuItem>
                    <Link to="/cart">Cart</Link>
                </HiddenMenuItem>
            </HiddenMenuList>
        </HiddenMenuBody>
    )
}