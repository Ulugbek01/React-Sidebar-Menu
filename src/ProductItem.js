import "./ProductItem.css";
import editIcon from "./assets/Path.svg";
import deleteIcon from "./assets/delete.svg";

function ProductItem(props) {
  return (
    <div className="product-item">
      <div className="product-item__brand">
        <div className="product-item__img">
          <img src={props.data.url} />
        </div>
        <div className="product-item__name">
          <p>{props.data.name}</p>
        </div>
      </div>

      <div className="product-item__category">
        <p>{props.data.category}</p>
      </div>

      <div className="product-item__price">
        <p>{props.data.price}</p>
      </div>

      <div className="product-item__optional">
        <p>{props.data.optional}</p>
      </div>

      <div className="product-item__action">
        <div className="item-edit">
          <img src={editIcon} />
        </div>
        <div className="item-delete">
          <img src={deleteIcon} />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
