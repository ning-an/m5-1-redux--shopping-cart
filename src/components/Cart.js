import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

export const Cart = () => {
  return (
    <CartWrapper>
      <h2>Your Cart</h2>
      <p>x Item</p>
      <CartItem />
      <Footer>
        <h3>Total: $12.34</h3>
        <PurchaseBtn>Purchase</PurchaseBtn>
      </Footer>
    </CartWrapper>
  );
};

const CartItem = () => {
  return (
    <ItemWrapper>
      <UpperLevel>
        <div>Abduction</div>
        <DeleteBtn>
          <AiOutlineClose />
        </DeleteBtn>
      </UpperLevel>
      <LowerLevel>
        <label>Quantity: </label>
        <Input />
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
  width: 70%;
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
  width: 70%;
  bottom: 40px;
  left: 20px;
  padding-right: 20px;
`;

const PurchaseBtn = styled(Button)`
  font-size: 24px;
  width: 130px;
`;
