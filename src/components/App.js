import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";
import { Cart } from "./Cart";

const App = () => {
  return (
    <Wrapper>
      <Main>
        <Header>
          <Logo />
        </Header>
        <ItemGridWrapper>
          <ItemGrid />
        </ItemGridWrapper>
      </Main>
      <CartWrapper>
        <Cart />
      </CartWrapper>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const Main = styled.div`
  flex-basis: 70%;
`;

const Header = styled.header`
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  flex-basis: 30%;
  max-width: 400px;
  min-width: 300px;
  border-left: 3px dashed #12343b;
  padding-left: 10px;
`;

export default App;
