import "./App.css";

import { SEARCH_CATEGORIES } from "./data/data";

import CategoryList from "./components/category/CategoryList";
import MainSearch from "./components/MainSearch";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSearch />
      <CategoryList categoryList={SEARCH_CATEGORIES} />
    </div>
  );
}

export default App;
