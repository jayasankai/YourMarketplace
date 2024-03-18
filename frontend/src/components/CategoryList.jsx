import "./CategoryList.css"

const CategorySection = (props) => {
    return (
      <div className="app-body">
        <p>Browse items by category</p>
        <ul>
          {
            props.categoryList.map((cat, index) => 
              <li>
                <p>{cat.name}</p>
                <img
                  src={cat.image}
                  alt={cat.description}
                />
              </li>
            )
          }
        </ul>
      </div>
    );
  };

  export default CategorySection;