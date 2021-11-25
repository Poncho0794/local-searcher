import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./style.css";
import data from '../../data/users.json';
import SearchResults from "./components/SearchResults";

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false);
  const [results, setResults] = useState([])
  const handleCloseSearch = () => {
    setIsAtTop(false)
    setResults([])
  } 
  const handleSearchClick = (searchText) => {
    const searchTextLowered = searchText.toLocaleLowerCase()
    if(data?.length) {
      const filteredData = data.filter((value) => 
      value.name.toLocaleLowerCase().includes(searchTextLowered) ||
      value.phone.toLocaleLowerCase().includes(searchTextLowered) ||
      value.email.toLocaleLowerCase().includes(searchTextLowered) ||
      value.username.toLocaleLowerCase().includes(searchTextLowered)
      )
      setResults(filteredData)
      setIsAtTop(true)
    }
  } 
  //
  return (
    <div className={`search ${isAtTop ? "search--top":"search--center"}` }>
      <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch} isSearching={isAtTop}/>
      <SearchResults results={results} isSearching={isAtTop}/>
    </div>
  );
}
