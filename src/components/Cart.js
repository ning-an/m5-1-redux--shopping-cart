import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { removeItem } from "../actions";

export const Cart = () => {
  const cartItems = useSelector((state) => Object.values(state));
  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );
  const formattedTotalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice / 100);
  return (
    <CartWrapper>
      <h2>Your Cart</h2>
      <p>{cartItems.length} Item</p>
      {cartItems.map((item) => {
        const { id, title, price, quantity } = item;
        return <CartItem key={id} title={title} id={id} quantity={quantity} />;
      })}
      <Footer>
        <h3>Total: {formattedTotalPrice}</h3>
        <PurchaseBtn>Purchase</PurchaseBtn>
      </Footer>
    </CartWrapper>
  );
};

const CartItem = ({ title, id, quantity }) => {
  const dispatch = useDispatch();
  return (
    <ItemWrapper>
      <UpperLevel>
        <div>{title}</div>
        <DeleteBtn onClick={() => dispatch(removeItem(id))}>
          <AiOutlineClose />
        </DeleteBtn>
      </UpperLevel>
      <LowerLevel>
        <label>Quantity: </label>
        <Input value={quantity} />
      </LowerLevel>
    </ItemWrapper>
  );
};

const CartWrapper = styled.div`
  width: 40%;
  height: 100%;
  background-color: #2d545e;
  color: #edf7f6;
  padding-left: 20px;
  padding-right: 20px;
  position: fixed;

  h2 {
    margin: 0;
    padding-top: 40px;
    font-size: 32px;
  }

  p {
    margin-bottom: 60px;
  }
`;

const ItemWrapper = styled.div`
  border: dashed #edf7f6 2px;
  border-radius: 3px;
  margin-top: 20px;
  width: 100%;
`;

const UpperLevel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const DeleteBtn = styled.button`
  cursor: pointer;
`;

const LowerLevel = styled.div`
  background-color: #12343b;
  padding: 10px;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: #edf7f6 2px solid;
  width: 2em;
  color: #edf7f6;
  text-align: center;
  font-size: 18px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 40px;
  left: 20px;
  padding-right: 40px;
`;

const PurchaseBtn = styled(Button)`
  font-size: 20px;
  width: 110px;
`;
