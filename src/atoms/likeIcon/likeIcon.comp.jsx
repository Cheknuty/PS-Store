import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addLikedGames } from "../../pages/favouritePage/favouriteSlice"
import { LikeIconBig, LikeIconNormal } from "./likeIcon.style"

export function LikeIcon({ size, id, isFav }) {
    const [value, setValue] = useState(isFav)
    const games = useSelector(state => state.allGamesList.games)
    const game = games.find(itm => itm.id === id)
    const dispatch = useDispatch()

    function clickHandler(e) {
        e.preventDefault()
        let obj
        if(e.target.dataset.active === "true") {
            setValue("false")
            obj =  {...game, isFav:"false"}
        } else {
            setValue("true")
            obj =  {...game, isFav:"true"}
        }

        dispatch(addLikedGames(obj))
    }
    return (
        <>
            {
                size === "big" ?
                    <LikeIconBig onClick={clickHandler} data-active={value}>
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8038 0C13.9074 0 12.0872 0.882834 10.8992 2.27793C9.71117 0.882834 7.89101 0 5.99455 0C2.6376 0 0 2.6376 0 5.99455C0 10.1144 3.70572 13.4714 9.3188 18.5722L10.8992 20L12.4796 18.5613C18.0926 13.4714 21.7984 10.1144 21.7984 5.99455C21.7984 2.6376 19.1608 0 15.8038 0ZM11.0082 16.9482L10.8992 17.0572L10.7902 16.9482C5.60218 12.2507 2.17984 9.14441 2.17984 5.99455C2.17984 3.81471 3.81471 2.17984 5.99455 2.17984C7.67302 2.17984 9.3079 3.25886 9.88556 4.75204H11.9237C12.4905 3.25886 14.1253 2.17984 15.8038 2.17984C17.9837 2.17984 19.6185 3.81471 19.6185 5.99455C19.6185 9.14441 16.1962 12.2507 11.0082 16.9482Z" fill="current" />
                        </svg>
                    </LikeIconBig> :
                    <LikeIconNormal>
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M15.8038 0C13.9074 0 12.0872 0.882834 10.8992 2.27793C9.71117 0.882834 7.89101 0 5.99455 0C2.6376 0 0 2.6376 0 5.99455C0 10.1144 3.70572 13.4714 9.3188 18.5722L10.8992 20L12.4796 18.5613C18.0926 13.4714 21.7984 10.1144 21.7984 5.99455C21.7984 2.6376 19.1608 0 15.8038 0ZM11.0082 16.9482L10.8992 17.0572L10.7902 16.9482C5.60218 12.2507 2.17984 9.14441 2.17984 5.99455C2.17984 3.81471 3.81471 2.17984 5.99455 2.17984C7.67302 2.17984 9.3079 3.25886 9.88556 4.75204H11.9237C12.4905 3.25886 14.1253 2.17984 15.8038 2.17984C17.9837 2.17984 19.6185 3.81471 19.6185 5.99455C19.6185 9.14441 16.1962 12.2507 11.0082 16.9482Z" fill="#383838" />
                        </svg>
                    </LikeIconNormal> 
            }
        </>
    )
}