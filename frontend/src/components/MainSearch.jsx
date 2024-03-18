import "./MainSearch.css"

const MainSearch = () => {
    return (
      <div className="app-body-search">
        <input type="text" className="search-input" id="searchInput"/>
        <button type="submit" className="search-button">Search</button>
      </div>
    );
  };

  export default MainSearch;