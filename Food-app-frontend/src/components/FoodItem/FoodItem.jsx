import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFormCart } = useContext(StoreContext);

  return (
    <div>
      <div className="food-item">
        <div className="food-item-img-container">
          <img
            src={`https://food-delivery-backend-flws.onrender.com/images/${image}`}
            alt={name}
            className="food-item-img"
          />
          {!cartItems[id] ? (
            <img
              className="add"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="fooditem_button"
            />
          ) : (
            <div className="food-item-counter">
              <img
                onClick={() => removeFormCart(id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
