import { Container } from "../../molecules/container/container.comp";
import { TinyList } from "../../molecules/tinyList/tinyList.comp";
import { CartWrapper } from "./cartPage.style";


export function CartPage() {
    return (
        <CartWrapper>
            <Container>
                <TinyList text="My games">

                </TinyList>
            </Container>
        </CartWrapper>
    )
}