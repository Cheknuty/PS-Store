import { useRef } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { MenuButtonWrapper } from "./menuButton.style"

export function MenuButton() {
    const button = useRef()
    const clicker = () => {
        button.current.closest("#root").querySelector("div").childNodes[0].classList.toggle("active--menu")
        button.current.closest("#root").querySelector("div").childNodes[1].classList.toggle("active--content")
    }

    return (
        <MenuButtonWrapper ref={button} onClick={clicker}>
            <AiOutlineMenu fontSize="20px" color="var(--color-stroke)" />
        </MenuButtonWrapper>
    )
}