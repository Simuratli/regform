import React from "react";

import styled from "styled-components";

const Animation = styled.div`
  animation: appearingComp 0.5s ease-in-out 0s 1 normal forwards;

  @keyframes appearingComp {
    0% {
      opacity: 0;
      ${({ withScale }) => withScale && "transform: scale(0.95);"}
    }
    100% {
      opacity: 1;
      ${({ withScale }) => withScale && "transform: scale(1);"}
    }
  }
`;

const AnimatedComponent = ({ children, style, withScale = false }) => {
  return (
    <Animation withScale={withScale} style={style}>
      {children}
    </Animation>
  );
};

export default AnimatedComponent;
