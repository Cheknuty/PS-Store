import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchGames } from "../../pages/explore/exploreSlice";
import { SearchInputElement, SearchInputForm } from "./searchinput.style";


export function SearchInput() {
    const nav = useNavigate()
    const dispatch = useDispatch()

    function submitHandler(e) {
        e.preventDefault()
        nav(`../explore/def/def/def/${e.target.elements[0].value}`)
        dispatch(searchGames(e.target.elements[0].value))
    }

    return (
        <SearchInputForm onSubmit={submitHandler}>
            <SearchInputElement placeholder="Search" maxLength="30" required />
        </SearchInputForm>
    )
}