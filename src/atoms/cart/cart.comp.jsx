import { CartIcon } from "./cart.style";
import cart from "../../assests/img/cart.svg"
import { Link } from "react-router-dom";

export function Cart() {
    return (
        <Link to="/cart">
            <CartIcon src={cart} width="20" height="20" alt="Cart" />
        </Link>
    )
}