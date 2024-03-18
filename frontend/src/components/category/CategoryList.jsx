import "./CategoryList.css"
import CategotyItem from "./CategoryItem";

const CategoryList = (props) => {
    return (
      <div className="app-body">
        <p>Browse items by category</p>
        <ul>
          {
            props.categoryList.map((cat, index) => 
              <li key={index}>
                <CategotyItem {...cat}/>
              </li>
            )
          }
        </ul>
      </div>
    );
  };

  export default CategoryList;