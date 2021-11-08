import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E8EBFE;
  //position: absolute;
  border-radius: 5px;
  //top: -1px;
  //left: -1px;

  .sp-2balls {
    margin: 0 10px;
  }

  .sp-1balls,
  .sp-2balls,
  .sp-3balls {
    border-radius: 50%;
    background-color: #696D8C;
    width: 10px;
    height: 10px;
    transform-origin: center center;
  }

  .sp-3balls {
    position: relative;
    opacity: 1;
    -webkit-animation: spScaleAlpha 1s infinite linear;
    animation: spScaleAlpha 1s infinite linear;
  }

  .sp-1balls {
    opacity: 0.25;
    -webkit-animation: spScaleAlphaBefore 1s infinite linear;
    animation: spScaleAlphaBefore 1s infinite linear;
  }

  .sp-3balls {
    opacity: 0.25;
    -webkit-animation: spScaleAlphaAfter 1s infinite linear;
    animation: spScaleAlphaAfter 1s infinite linear;
  }

  @keyframes spScaleAlpha {
    0% {
      opacity: 1;
    }
    33% {
      opacity: 0.25;
    }
    66% {
      opacity: 0.25;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes spScaleAlphaBefore {
    0% {
      opacity: 0.25;
    }
    33% {
      opacity: 1;
    }
    66% {
      opacity: 0.25;
    }
  }

  @keyframes spScaleAlphaAfter {
    33% {
      opacity: 0.25;
    }
    66% {
      opacity: 1;
    }
    100% {
      opacity: 0.25;
    }
  }
`;

export const ButtonLoader = () => {
    return (
        <Loader>
            <div className="sp-1balls"/>
            <div className="sp-2balls"/>
            <div className="sp-3balls"/>
        </Loader>
    );
};
