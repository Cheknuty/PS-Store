import { Link } from "react-router-dom";
import { ButtonAllWrapper } from "./buttonAll.style";


export function ButtonAll() {
    return (
        <Link to="/explore"><ButtonAllWrapper>VIEW ALL +</ButtonAllWrapper></Link>
    )
}