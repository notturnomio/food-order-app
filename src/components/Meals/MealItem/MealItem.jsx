import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const priceTag = `$${price.toFixed(2)}`;

  const AddToCartHandler = (amount) => {
    cartCtx.addItem({ id: id, name: name, amount: amount, price: price });
  };

  return (
    <li className={classes.meal} id={id}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceTag}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={AddToCartHandler} id={id} />
      </div>
    </li>
  );
};

export default MealItem;
