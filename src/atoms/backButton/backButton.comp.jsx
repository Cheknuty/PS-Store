import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"

export function BackButton() {
    
    return (
        <Link to={-1}>
            <FiArrowLeft color="var(--color-light)" fontSize="25" />
        </Link>
    )
}