import { SearchInputElement, SearchInputForm } from "./searchinput.style";


export function SearchInput() {
    return (
        <SearchInputForm onSubmit={(e) => e.preventDefault()}>
            <SearchInputElement placeholder="Search" maxLength="30" required />
        </SearchInputForm>
    )
}