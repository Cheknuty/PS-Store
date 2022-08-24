import { CartIcon } from "./cart.style";
import cart from "../../assests/img/cart.svg"

export function Cart() {
    return (
        <CartIcon src={cart} width="20" height="20" alt="Cart" />
    )
}