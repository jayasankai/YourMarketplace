import "./CategoryItem.css"

const CategotyItem = ({name, description, image, noOfAds}) => {
    return (
      <div className="category-item">
          <img
            src={image}
            alt={description}
          />
          <div>{name}</div>
          <div>{noOfAds}</div>
      </div>
    );
  }

  export default CategotyItem;