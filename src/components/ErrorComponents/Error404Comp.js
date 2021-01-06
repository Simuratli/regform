import React from "react";

import styled from "styled-components";

const ErrorComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  min-height: 720px;
  margin: 60px;
  background: #f2f3f9;
`;

const Error404Comp = () => {
  return <ErrorComp>404</ErrorComp>;
};

export default Error404Comp;
