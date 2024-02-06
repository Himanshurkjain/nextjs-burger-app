// components/CartIcon.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from "./carticon.module.css";

type CartIconProps = {
    itemCount: number;
}

const CartIcon = ({ itemCount }: CartIconProps) => {
  return (
    <div style={{ display: "flex"}}>
      <FaShoppingCart size={25} color='white' />
      <span className={styles["cart-item-count"]}>{itemCount}</span>
    </div>
  );
};

export default CartIcon;
