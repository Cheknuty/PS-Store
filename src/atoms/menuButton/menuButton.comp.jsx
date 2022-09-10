import { useRef } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { MenuButtonWrapper } from "./menuButton.style"
import { AiOutlineClose } from "react-icons/ai"
export function MenuButton({state}) {
    const button = useRef()
    const clicker = () => {
        button.current.closest("#root").querySelector("div").childNodes[0].classList.toggle("active--menu")
        button.current.closest("#root").querySelector("div").childNodes[1].classList.toggle("active--content")
    }

    return (
        <MenuButtonWrapper ref={button} onClick={clicker}>
            {
                state === "open" ?
                <AiOutlineMenu fontSize="20px" color="var(--color-stroke)" /> :
                <AiOutlineClose fontSize="20px" color="var(--color-stroke)" />
            }
        </MenuButtonWrapper>
    )
}