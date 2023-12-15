import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StHeader>
      <StSpan>My Todo List</StSpan>
      <StSpan>React</StSpan>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #7489f1b0;
  font-size: 20px;
  border-radius: 15px;
  width: 1000px;
  margin: 0px auto;
  font-weight: bold;
`;

const StSpan = styled.span`
  margin: 0px 20px;
`;
