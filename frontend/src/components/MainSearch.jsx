import "./MainSearch.css"

const MainSearch = () => {
    return (
      <div className="app-body-search">
        <h4> Search </h4>
        <input type="text" id="input_search" />
        <button type="submit" caption="Search">Search</button>
      </div>
    );
  };

  export default MainSearch;