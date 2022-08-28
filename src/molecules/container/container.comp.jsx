import { ContainerWrapper } from "./container.style";


export function Container({children}) {
    return(
        <ContainerWrapper id="container">{children}</ContainerWrapper>
    )
}