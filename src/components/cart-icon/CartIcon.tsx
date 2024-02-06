// components/CartIcon.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';

const StyledCartIcon = styled.div`
  display: flex;
`;

const StyledCartItemCount = styled.span`
  background-color: orange;
  color: white;
  border-radius: 50%;
  padding: 8px 6px;
  font-size: 16px;
  margin-right: 5px;
  margin-left: 2px;
`;

type CartIconProps = {
    itemCount: number;
}

const CartIcon = ({ itemCount }: CartIconProps) => {
  return (
    <StyledCartIcon>
      <FaShoppingCart size={25} color='white' />
      <StyledCartItemCount>{itemCount}</StyledCartItemCount>
    </StyledCartIcon>
  );
};

export default CartIcon;
