import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackButton } from "../../atoms/backButton/backButton.comp";
import { CartIcon } from "../../atoms/cartIcon/cartIcon.comp";
import { CartItem } from "../../atoms/cartItem/cartItem.comp";
import { CartList } from "../../atoms/cartList/cartList.comp";
import { TitlePrimary } from "../../atoms/titlePrimary/titlePrimary.comp";
import { Container } from "../../molecules/container/container.comp";
import { FavouritePageTitleWrapper, FavouritePageWrapper } from "./favouritePage.style";
import { fetchLikedGames } from "./favouriteSlice";


export function FavouritePage() {
    const dispatch = useDispatch()
    const games = useSelector(state => state.likedGamesList.games)
    const status = useSelector(state => state.likedGamesList.status)
    useEffect(() => {
        dispatch(fetchLikedGames())
        // eslint-disable-next-line
    }, [])
    return (
        <FavouritePageWrapper>
            <Container>
                <FavouritePageTitleWrapper>
                    <BackButton />
                    <TitlePrimary text="Favourite games" />
                </FavouritePageTitleWrapper>
                <CartList>
                    {
                        status === "resolved" ?
                        games.length !== 0 ?
                        games.map(game => <CartItem key={game.id} game={game} />) : <CartIcon text="You haven't liked the game yet" />
                        : <CartIcon text="You haven't liked the game yet" />
                    }
                </CartList>
            </Container>
        </FavouritePageWrapper>
    )
}