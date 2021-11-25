import SearchResultsItem from "./SearchResultsItem";
import "./styles.css";

export default function SearchResults({ results, isSearching }) {
  return (
    <div className="search-results">
      {!results?.length && isSearching && <p>No existen resultados</p>}
      {!!results?.length && (
        <div className="search-results-list">
          {results?.map((value) => (
            <SearchResultsItem
              {...value}
              key={value.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
