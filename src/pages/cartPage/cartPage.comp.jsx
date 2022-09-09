import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackButton } from "../../atoms/backButton/backButton.comp";
import { CartIcon } from "../../atoms/cartIcon/cartIcon.comp";
import { CartItem } from "../../atoms/cartItem/cartItem.comp";
import { CartList } from "../../atoms/cartList/cartList.comp";
import { TitlePrimary } from "../../atoms/titlePrimary/titlePrimary.comp";
import { Container } from "../../molecules/container/container.comp";
import { CartTitleWrapper, CartWrapper } from "./cartPage.style";
import { fetchPurchasedGames } from "./cartSlice";


export function CartPage() {
    const dispatch = useDispatch()
    const games = useSelector(state => state.purchasedGamesList.games)
    const status = useSelector(state => state.purchasedGamesList.status)
    useEffect(() => {
        dispatch(fetchPurchasedGames())
        // eslint-disable-next-line
    }, [])
    return (
        <CartWrapper>
            <Container>
                <CartTitleWrapper>
                    <BackButton />
                    <TitlePrimary text="My games" />
                </CartTitleWrapper>
                <CartList>
                    {
                        status === "resolved" ?
                        games.length !== 0 ?
                        games.map(game => <CartItem key={game.id} game={game} />) : <CartIcon />
                        : <CartIcon text="You haven't purchased the game yet" />
                    }
                </CartList>
            </Container>
        </CartWrapper>
    )
}